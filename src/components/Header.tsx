import React, { useState } from 'react';
import { ShieldCheck, Info, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="border-b border-[#222222] bg-[#0E0E0E]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-4">
            {/* Visual Brand Mark */}
            <div className="h-11 w-11 rounded-lg bg-[#F5B400] flex items-center justify-center font-black text-black text-xl tracking-tighter shadow-md">
              MP
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#F5B400]">
                  MP CARGAS
                </span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 font-medium px-2 py-0.5 rounded">
                  PORTAL
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mt-0.5">
                MP HUB
              </h1>
              <p className="text-xs text-neutral-400 font-medium mt-0.5">
                Central de Sistemas
              </p>
            </div>
          </div>

          {/* Right Header Navigation / Info */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-400 bg-[#161616] border border-[#262626] px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Acesso Corporativo
            </div>

            <button
              onClick={() => setShowModal(true)}
              title="Informações do Portal"
              aria-label="Informações do Portal"
              className="p-2.5 rounded-lg bg-[#161616] text-neutral-300 hover:text-white hover:bg-[#222222] border border-[#282828] transition-colors"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Info Dialog */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171717] border border-[#2E2E2E] rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-md"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F5B400]/10 text-[#F5B400] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">MP HUB — Central de Sistemas</h4>
                <p className="text-xs text-neutral-400">Portal Interno MP CARGAS</p>
              </div>
            </div>

            <div className="text-sm text-neutral-300 space-y-3 border-t border-[#262626] pt-4">
              <p>
                O <strong>MP HUB</strong> é o ponto unificado de atalhos e acessos rápidos para todos os sistemas corporativos operacionais e administrativos da <strong>MP CARGAS</strong>.
              </p>
              <p className="text-xs text-neutral-400">
                Cada sistema é executado em sua própria infraestrutura em nova aba para garantir agilidade e isolamento.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#F5B400] hover:bg-[#FFC425] text-black font-bold text-sm px-5 py-2 rounded-lg transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
