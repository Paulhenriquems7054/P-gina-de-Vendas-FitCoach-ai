import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendChatMessage = async (message: string, history: { role: 'user' | 'model'; text: string }[]) => {
  const ai = getAiClient();
  if (!ai) return "Erro: Chave de API não encontrada.";

  try {
    // Convert simple history to Gemini format if needed, or just use generateContent for single turn demo
    // For this landing page demo, a single turn with system instruction is sufficient/safer/faster
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: "Você é a 'Fitcoach.ia', uma nutricionista gentil, motivadora e inteligente. Responda de forma curta (máximo 40 palavras), amigável e em Português. Use emojis. O usuário está testando uma demonstração do app.",
      }
    });
    
    return response.text || "Desculpe, não consegui processar isso agora.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ops! Tive um problema técnico. Tente novamente.";
  }
};