import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SystemCard } from './components/SystemCard';
import { systems } from './data/systems';
import { LayoutGrid, Search, Layers, Radio } from 'lucide-react';

export const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'coming-soon'>('all');

  const filteredSystems = useMemo(() => {
    return systems.filter((sys) => {
      const matchesSearch =
        sys.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sys.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter =
        filter === 'all' ? true : sys.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  const activeCount = useMemo(
    () => systems.filter((s) => s.status === 'active').length,
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-neutral-100 selection:bg-[#F5B400] selection:text-black">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Banner / Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1E1E1E]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F5B400]/10 text-[#F5B400] border border-[#F5B400]/20">
                <Radio className="w-3 h-3 animate-pulse" />
                Central de Sistemas Operacionais
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sistemas
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Acesso rápido aos portais, ferramentas de gerenciamento e serviços internos da MP CARGAS.
            </p>
          </div>

          {/* Quick Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar sistema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#141414] border border-[#262626] rounded-lg pl-9 pr-3.5 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#F5B400] transition-colors"
              />
            </div>

            <div className="flex items-center bg-[#141414] border border-[#262626] rounded-lg p-1 text-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  filter === 'all'
                    ? 'bg-[#262626] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Todos ({systems.length})
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  filter === 'active'
                    ? 'bg-[#F5B400] text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Ativos ({activeCount})
              </button>
              <button
                onClick={() => setFilter('coming-soon')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  filter === 'coming-soon'
                    ? 'bg-[#262626] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Em breve
              </button>
            </div>
          </div>
        </div>

        {/* Systems Grid */}
        <section className="mt-8">
          {filteredSystems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredSystems.map((system) => (
                <SystemCard key={system.id} system={system} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-[#222222] rounded-xl bg-[#121212]/50">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 mx-auto flex items-center justify-center mb-3">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white">Nenhum sistema encontrado</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
                Não foram encontrados sistemas que correspondam à sua pesquisa &quot;{searchTerm}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                }}
                className="mt-4 text-xs font-bold text-[#F5B400] hover:underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </section>

        {/* Operational Notice */}
        <div className="mt-12 p-4 rounded-xl border border-[#222222] bg-[#121212] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center text-[#F5B400]">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-200">
                Central de Sistemas Operacionais
              </p>
              <p className="text-[11px] text-neutral-400">
                Os atalhos abrem diretamente as plataformas em nova aba segura.
              </p>
            </div>
          </div>

          <span className="text-[11px] text-neutral-400 font-mono">
            V 1.0.0 &bull; MP CARGAS HUB
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
