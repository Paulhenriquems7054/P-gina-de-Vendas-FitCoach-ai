import React, { useState } from 'react';
import { Calculator, TrendingDown } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [nutricionistaConsultas, setNutricionistaConsultas] = useState(2);
  const [personalSessoes, setPersonalSessoes] = useState(4);
  
  const nutricionistaPreco = 250;
  const personalPreco = 150;
  const fitcoachPreco = 34.90;
  
  const custoNutricionista = nutricionistaConsultas * nutricionistaPreco;
  const custoPersonal = personalSessoes * personalPreco;
  const custoTotal = custoNutricionista + custoPersonal;
  const economia = custoTotal - fitcoachPreco;
  const percentualEconomia = custoTotal > 0 ? ((economia / custoTotal) * 100).toFixed(0) : 0;

  return (
    <div className="bg-gradient-to-br from-nutri-accent/10 to-blue-50 dark:from-nutri-dark dark:to-gray-800 p-6 md:p-8 rounded-3xl shadow-xl border border-nutri-accent/20 dark:border-gray-700 mb-12 reveal">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-nutri-accent rounded-xl flex items-center justify-center">
          <Calculator size={24} className="text-nutri-dark" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-nutri-dark dark:text-white">
          Calcule Sua Economia
        </h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Consultas com Nutricionista por mês:
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="8"
              value={nutricionistaConsultas}
              onChange={(e) => setNutricionistaConsultas(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-lg font-bold text-nutri-dark dark:text-white w-12 text-center">
              {nutricionistaConsultas}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            R$ {nutricionistaPreco.toFixed(2)} por consulta
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Sessões com Personal Trainer por mês:
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="12"
              value={personalSessoes}
              onChange={(e) => setPersonalSessoes(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-lg font-bold text-nutri-dark dark:text-white w-12 text-center">
              {personalSessoes}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            R$ {personalPreco.toFixed(2)} por sessão
          </p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-nutri-accent shadow-lg">
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Custo Nutricionista:</span>
            <span className="font-bold text-gray-800 dark:text-white">
              R$ {custoNutricionista.toFixed(2)}
            </span>
          </div>
          
          <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Custo Personal Trainer:</span>
            <span className="font-bold text-gray-800 dark:text-white">
              R$ {custoPersonal.toFixed(2)}
            </span>
          </div>
          
          <div className="flex justify-between items-center pb-3 border-b-2 border-nutri-accent">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">Total Alternativas:</span>
            <span className="text-lg font-bold text-red-600 dark:text-red-400">
              R$ {custoTotal.toFixed(2)}/mês
            </span>
          </div>
          
          <div className="flex justify-between items-center pb-3">
            <span className="text-lg font-semibold text-nutri-dark dark:text-white">Fitcoach.ia:</span>
            <span className="text-lg font-bold text-green-600 dark:text-green-400">
              R$ {fitcoachPreco.toFixed(2)}/mês
            </span>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-xl border-2 border-green-500 dark:border-green-600">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingDown size={20} className="text-green-600 dark:text-green-400" />
                <span className="font-bold text-green-800 dark:text-green-200">Você Economiza:</span>
              </div>
              <span className="text-2xl font-black text-green-600 dark:text-green-400">
                R$ {economia.toFixed(2)}/mês
              </span>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300 text-center">
              Isso representa <span className="font-bold">{percentualEconomia}% de economia</span> por mês!
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
        * Valores baseados em preços médios de mercado. Seus valores podem variar.
      </p>
    </div>
  );
};

