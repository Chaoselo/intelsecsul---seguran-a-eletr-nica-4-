import React from 'react';
import { MapPin } from 'lucide-react';

export const BairrosCuritibaCard: React.FC = () => {
  return (
    <div className="bg-[#121824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl my-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-10 rounded-xl bg-[#0091FF]/20 border border-[#0091FF]/30 flex items-center justify-center text-[#00C5FF]">
          <MapPin className="w-5 h-5" />
        </span>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Cobertura e Visita Técnica em Curitiba</h3>
          <span className="text-xs text-[#00C5FF] font-semibold">Atendimento Rápido e Equipe Própria</span>
        </div>
      </div>
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-[#0A0D14] p-4 rounded-xl border border-slate-800">
        Atendemos com visita técnica e suporte rápido em todos os bairros de Curitiba: Batel, Água Verde, Bigorrilho (Champagnat), Centro, Portão, Santa Felicidade, Cabral, Juvevê, Cristo Rei, Alto da XV, Rebouças, Mercês, Tarumã, CIC (Cidade Industrial), Boqueirão, Xaxim, Pinheirinho, Capão Raso, Sítio Cercado, Novo Mundo, Hauer, Bacacheri, Boa Vista, Pilarzinho, Abranches, São Lourenço, Ahu, Campo Comprido, Mossunguê (Ecoville), Fazendinha, Guabirotuba, Uberaba, Alto da Glória, Prado Velho e Umbará.
      </p>
    </div>
  );
};
