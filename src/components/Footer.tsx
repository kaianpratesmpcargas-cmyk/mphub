import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1F1F1F] bg-[#0A0A0A] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-extrabold text-sm tracking-wider text-white">
              MP CARGAS
            </span>
            <p className="text-xs text-neutral-400 mt-0.5">
              MP HUB — Central de Sistemas
            </p>
          </div>
          <div className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} MP CARGAS. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
