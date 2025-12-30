// supabase/functions/cakto-webhook/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Secrets já configurados no Supabase
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const CAKTO_WEBHOOK_SECRET = Deno.env.get("CAKTO_WEBHOOK_SECRET");
const SKIP_CAKTO_WEBHOOK_AUTH = Deno.env.get("SKIP_CAKTO_WEBHOOK_AUTH") === "true";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// ===================================================================
// Função principal do webhook
// ===================================================================
serve(
  async (req: Request) => {
    try {
      // Apenas POST
      if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
      }

      // Autenticação opcional via header x-webhook-secret
      if (!SKIP_CAKTO_WEBHOOK_AUTH && CAKTO_WEBHOOK_SECRET) {
        const headerSecret = req.headers.get("x-webhook-secret");
        if (headerSecret !== CAKTO_WEBHOOK_SECRET) {
          console.error("Segredo inválido no webhook");
          return new Response("Unauthorized", { status: 401 });
        }
      }

      // Ler JSON vindo da Cakto
      const body = await req.json();
      console.log("Payload Cakto recebido:", body);

      // Adaptado ao payload real da Cakto que você enviou
      const eventType: string = body?.event || ""; // ex.: "pix_gerado", "payment.completed"
      const data = body?.data || {};

      // ⚠️ IMPORTANTE: Usa product.short_id como chave principal
      // Exemplo: se o produto na Cakto tem short_id "zeygxve_668421",
      // você deve ter esse mesmo valor em app_plans.cakto_checkout_id
      const productShortId: string = data.product?.short_id ?? "";
      const checkoutNumeric: string = data.checkout !== undefined ? String(data.checkout) : "";
      
      // Prioriza product.short_id, se não tiver usa checkout numérico
      const checkoutId: string = productShortId || checkoutNumeric || "";

      const transactionId: string = String(data.id ?? "");
      const amountPaid: number = Number(data.amount ?? data.subscription?.amount ?? 0);
      const customerEmail: string = data.customer?.email ?? "";
      const status: string = data.status ?? ""; // ex.: "paid"

      if (!checkoutId) {
        console.error("checkoutId (product.short_id ou checkout) não encontrado no payload");
        return new Response("checkout_id ausente", { status: 400 });
      }

      // Buscar o plano na tabela app_plans usando product.short_id
      // IMPORTANTE: em app_plans.cakto_checkout_id você deve gravar o mesmo valor de product.short_id
      const { data: plan, error: planError } = await supabase
        .from("app_plans")
        .select("*")
        .eq("cakto_checkout_id", checkoutId)
        .single();

      if (planError || !plan) {
        console.error("Plano não encontrado para chave:", checkoutId, planError);
        return new Response("Plano não encontrado", { status: 404 });
      }

      console.log("Plano encontrado:", { plan_group: plan.plan_group, slug: plan.slug });

      // Considerar como pagamento confirmado se status === "paid"
      // Você pode refinar depois se a Cakto enviar outros tipos de evento
      const isPaidEvent = status === "paid";

      if (!isPaidEvent) {
        console.log("Evento não é de pagamento confirmado, ignorando:", {
          eventType,
          status,
        });
        return new Response("Evento ignorado", { status: 200 });
      }

      // Ramificação por tipo de plano
      switch (plan.plan_group) {
        case "b2b_academia":
          await handleAcademyPlan({ plan, transactionId, amountPaid, customerEmail, body });
          break;
        case "b2c":
          await handleB2CPlan({ plan, transactionId, amountPaid, customerEmail, body });
          break;
        case "recarga":
          await handleRecharge({ plan, transactionId, amountPaid, customerEmail, body });
          break;
        case "personal":
          await handlePersonalTrainerPlan({
            plan,
            transactionId,
            amountPaid,
            customerEmail,
            body,
          });
          break;
        default:
          console.warn("plan_group desconhecido:", plan.plan_group);
          break;
      }

      return new Response("OK", { status: 200 });
    } catch (err) {
      console.error("Erro no webhook Cakto:", err);
      return new Response("Erro interno", { status: 500 });
    }
  },
  {
    // IMPORTANTE: permite que a Cakto chame sem JWT → evita erro 401
    verifyJwt: false,
  },
);

// ===================================================================
// HANDLERS – adapte os nomes de tabelas para o que você usa hoje
// ===================================================================

async function handleAcademyPlan(args: {
  plan: any;
  transactionId: string;
  amountPaid: number;
  customerEmail: string;
  body: any;
}) {
  const { plan, transactionId, amountPaid, customerEmail } = args;

  const { error } = await supabase.from("academy_subscriptions").insert({
    academy_email: customerEmail,
    plan_slug: plan.slug,
    plan_group: plan.plan_group,
    cakto_checkout_id: plan.cakto_checkout_id,
    cakto_transaction_id: transactionId,
    amount_paid: amountPaid,
    max_licenses: plan.max_licenses,
    status: "active",
  });

  if (error) {
    console.error("Erro ao criar assinatura de academia:", error);
  }
}

async function handleB2CPlan(args: {
  plan: any;
  transactionId: string;
  amountPaid: number;
  customerEmail: string;
  body: any;
}) {
  const { plan, transactionId, amountPaid, customerEmail } = args;

  const { error } = await supabase.from("user_subscriptions").insert({
    user_email: customerEmail,
    plan_slug: plan.slug,
    plan_group: plan.plan_group,
    cakto_checkout_id: plan.cakto_checkout_id,
    cakto_transaction_id: transactionId,
    amount_paid: amountPaid,
    status: "active",
  });

  if (error) {
    console.error("Erro ao criar assinatura B2C:", error);
  }
}

async function handleRecharge(args: {
  plan: any;
  transactionId: string;
  amountPaid: number;
  customerEmail: string;
  body: any;
}) {
  const { plan, transactionId, amountPaid, customerEmail } = args;

  const { error } = await supabase.from("recharges").insert({
    user_email: customerEmail,
    recharge_slug: plan.slug,
    plan_group: plan.plan_group,
    cakto_checkout_id: plan.cakto_checkout_id,
    cakto_transaction_id: transactionId,
    amount_paid: amountPaid,
    status: "active",
  });

  if (error) {
    console.error("Erro ao registrar recarga:", error);
  }
}

async function handlePersonalTrainerPlan(args: {
  plan: any;
  transactionId: string;
  amountPaid: number;
  customerEmail: string;
  body: any;
}) {
  const { plan, transactionId, amountPaid, customerEmail } = args;

  const { error } = await supabase.from("personal_subscriptions").insert({
    personal_email: customerEmail,
    plan_slug: plan.slug,
    plan_group: plan.plan_group,
    cakto_checkout_id: plan.cakto_checkout_id,
    cakto_transaction_id: transactionId,
    amount_paid: amountPaid,
    max_licenses: plan.max_licenses,
    status: "active",
  });

  if (error) {
    console.error("Erro ao criar assinatura de personal:", error);
  }
}

