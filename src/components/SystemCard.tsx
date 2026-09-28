import React from 'react';
import {
  Package,
  MapPin,
  Clock,
  Truck,
  FileText,
  Barcode,
  BarChart3,
  Users,
  ExternalLink,
  Lock
} from 'lucide-react';
import type { SystemItem } from '../data/systems';

interface SystemCardProps {
  system: SystemItem;
}

const iconMap = {
  package: Package,
  'map-pin': MapPin,
  clock: Clock,
  truck: Truck,
  'file-text': FileText,
  barcode: Barcode,
  'bar-chart': BarChart3,
  users: Users,
};

export const SystemCard: React.FC<SystemCardProps> = ({ system }) => {
  const IconComponent = iconMap[system.icon] || Package;
  const isActive = system.status === 'active' && !!system.url;

  const handleCardClick = () => {
    if (isActive && system.url) {
      window.open(system.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isActive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      role={isActive ? 'button' : 'region'}
      tabIndex={isActive ? 0 : -1}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      aria-label={isActive ? `Acessar sistema ${system.name}` : `Sistema ${system.name} em breve`}
      className={`group relative flex flex-col justify-between p-6 rounded-xl border transition-all duration-200 ${
        isActive
          ? 'bg-[#151515] border-[#2A2A2A] hover:border-[#F5B400] hover:bg-[#1A1A1A] cursor-pointer shadow-lg hover:shadow-yellow-500/10 active:scale-[0.99]'
          : 'bg-[#121212]/70 border-[#222222] opacity-60 cursor-not-allowed select-none'
      }`}
    >
      <div>
        {/* Top Header inside Card */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${
              isActive
                ? 'bg-[#F5B400]/10 text-[#F5B400] group-hover:bg-[#F5B400] group-hover:text-black'
                : 'bg-white/5 text-neutral-400'
            }`}
          >
            <IconComponent className="w-6 h-6 stroke-[1.8]" />
          </div>

          <span
            className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${
              isActive
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/50'
                : 'bg-neutral-800/70 text-neutral-400 border-neutral-700/50'
            }`}
          >
            {system.badge || (isActive ? 'Ativo' : 'Em breve')}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-[#F5B400] transition-colors">
          {system.name}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed min-h-[40px]">
          {system.description}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-4 border-t border-[#222222] flex items-center justify-between">
        {isActive ? (
          <>
            <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1.5 group-hover:text-neutral-200 transition-colors">
              Nova aba
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#F5B400]" />
            </span>
            <button
              type="button"
              tabIndex={-1}
              className="inline-flex items-center gap-2 bg-[#F5B400] text-black font-bold text-sm px-4 py-2 rounded-lg group-hover:bg-[#FFC425] transition-colors shadow-sm"
            >
              Acessar
              <ExternalLink className="w-4 h-4 stroke-[2.2]" />
            </button>
          </>
        ) : (
          <div className="w-full flex items-center justify-between text-neutral-400 text-xs">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Em desenvolvimento
            </span>
            <span className="font-medium text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-800">
              Indisponível
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
