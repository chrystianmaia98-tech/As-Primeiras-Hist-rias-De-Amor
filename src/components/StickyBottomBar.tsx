import { CHECKOUT_URL } from '../types';
import { ArrowRight, Zap } from 'lucide-react';

export function StickyBottomBar() {
  return (
    <div
      id="sticky-checkout-bar"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 shadow-2xl"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        <div className="flex flex-col">
          <span className="text-xs text-neutral-400 font-medium line-clamp-1">
            As Primeiras Histórias de Amor
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs text-neutral-500 line-through hidden xs:inline">R$ 39,90</span>
            <span className="text-lg sm:text-xl font-extrabold text-emerald-400">
              R$ 10,00
            </span>
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider hidden sm:inline">
              • Acesso Vitalício
            </span>
          </div>
        </div>

        <a
          id="sticky-checkout-button"
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (window.self !== window.top) {
              try {
                window.top?.location.assign(CHECKOUT_URL);
              } catch {
                window.open(CHECKOUT_URL, '_blank');
              }
            }
          }}
          className="flex items-center justify-center gap-2 py-3 px-5 sm:px-7 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-neutral-950 font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-500/25 shrink-0 transition-transform active:scale-95"
        >
          <Zap className="w-4 h-4 fill-neutral-950" />
          <span>GARANTIR POR R$ 10</span>
          <ArrowRight className="w-4 h-4 hidden sm:inline" />
        </a>
      </div>
    </div>
  );
}
