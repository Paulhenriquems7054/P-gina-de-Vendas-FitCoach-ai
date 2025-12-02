import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  nutricionista: boolean | string;
  personalTrainer: boolean | string;
  outrosApps: boolean | string;
  fitcoach: boolean | string;
}

const comparisons: ComparisonItem[] = [
  {
    feature: 'Análise de Fotos (Comida)',
    nutricionista: 'R$ 250/consulta',
    personalTrainer: false,
    outrosApps: 'Limitado',
    fitcoach: 'Ilimitado',
  },
  {
    feature: 'Análise de Treinos',
    nutricionista: false,
    personalTrainer: 'R$ 150/sessão',
    outrosApps: false,
    fitcoach: 'Ilimitado',
  },
  {
    feature: 'Treinos Personalizados',
    nutricionista: false,
    personalTrainer: 'R$ 150/sessão',
    outrosApps: 'Genéricos',
    fitcoach: 'Ilimitados',
  },
  {
    feature: 'Chat por Texto',
    nutricionista: 'Durante consulta',
    personalTrainer: 'Durante sessão',
    outrosApps: 'Limitado',
    fitcoach: 'Ilimitado 24/7',
  },
  {
    feature: 'Consultoria por Voz',
    nutricionista: false,
    personalTrainer: false,
    outrosApps: false,
    fitcoach: '15 min/dia',
  },
  {
    feature: 'Disponibilidade',
    nutricionista: 'Agendado',
    personalTrainer: 'Agendado',
    outrosApps: '24/7',
    fitcoach: '24/7',
  },
];

export const PriceComparison: React.FC = () => {
  const renderValue = (value: boolean | string) => {
    if (value === false) {
      return <X size={16} className="text-red-500" />;
    }
    if (value === true) {
      return <Check size={16} className="text-green-500" />;
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 mb-12 reveal">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-nutri-dark dark:text-white mb-6 text-center">
        Compare com Alternativas
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr className="border-b-2 border-gray-200 dark:border-gray-700">
              <th className="text-left py-4 px-2 md:px-4 font-semibold text-gray-700 dark:text-gray-300">Recurso</th>
              <th className="text-center py-4 px-2 md:px-4 font-semibold text-gray-700 dark:text-gray-300">Nutricionista</th>
              <th className="text-center py-4 px-2 md:px-4 font-semibold text-gray-700 dark:text-gray-300">Personal Trainer</th>
              <th className="text-center py-4 px-2 md:px-4 font-semibold text-gray-700 dark:text-gray-300">Outros Apps</th>
              <th className="text-center py-4 px-2 md:px-4 font-semibold text-nutri-dark dark:text-nutri-accent bg-nutri-accent/10 rounded-lg">Fitcoach.ia</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="py-4 px-2 md:px-4 font-medium text-gray-800 dark:text-gray-200">{item.feature}</td>
                <td className="py-4 px-2 md:px-4 text-center text-gray-600 dark:text-gray-400">{renderValue(item.nutricionista)}</td>
                <td className="py-4 px-2 md:px-4 text-center text-gray-600 dark:text-gray-400">{renderValue(item.personalTrainer)}</td>
                <td className="py-4 px-2 md:px-4 text-center text-gray-600 dark:text-gray-400">{renderValue(item.outrosApps)}</td>
                <td className="py-4 px-2 md:px-4 text-center font-semibold text-nutri-dark dark:text-nutri-accent bg-nutri-accent/5">{renderValue(item.fitcoach)}</td>
              </tr>
            ))}
            <tr className="bg-nutri-accent/10 font-bold">
              <td className="py-4 px-2 md:px-4 text-gray-800 dark:text-white">Custo Mensal</td>
              <td className="py-4 px-2 md:px-4 text-center text-red-600 dark:text-red-400">R$ 500-1.000+</td>
              <td className="py-4 px-2 md:px-4 text-center text-red-600 dark:text-red-400">R$ 600-1.200+</td>
              <td className="py-4 px-2 md:px-4 text-center text-gray-600 dark:text-gray-400">R$ 50-90</td>
              <td className="py-4 px-2 md:px-4 text-center text-green-600 dark:text-green-400 text-lg">R$ 34,90</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
        <p className="text-sm text-green-800 dark:text-green-200 text-center">
          <span className="font-bold">Economia de até 87%</span> comparado a consultas presenciais
        </p>
      </div>
    </div>
  );
};

