import { useState, useEffect } from 'react';
import { DOWNSELL_CHECKOUT_URL, POSTER_URL } from '../types';
import { ShieldCheck, Zap, ArrowRight, X, Clock, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const [seconds, setSeconds] = useState<number>(299); // 5 minutes timer

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <div
      id="exit-downsell-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="exit-downsell-modal"
        className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border-2 border-red-500 shadow-2xl shadow-red-900/50 p-5 sm:p-7 text-center overflow-hidden my-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors z-10"
          aria-label="Fechar oferta"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Warning Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          ESPERE! NÃO FECHE ESTA PÁGINA!
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
          ÚLTIMA CHANCE EXCLUSIVA
        </h2>

        <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto mb-4">
          Não queremos que você vá embora sem assistir a este filme incrível. Por isso, liberamos um desconto de saída imperdível:
        </p>

        {/* Movie Mini Banner */}
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-left mb-4">
          <img
            src={POSTER_URL}
            alt="As Primeiras Histórias de Amor"
            className="w-12 h-16 rounded-lg object-cover shrink-0 border border-neutral-700"
            referrerPolicy="no-referrer"
          />
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Filme Completo
            </span>
            <h4 className="text-sm font-bold text-white truncate">
              As Primeiras Histórias de Amor
            </h4>
            <p className="text-xs text-neutral-400">
              Filme completo sem cortes • Dublado & Legendado • Full HD
            </p>
          </div>
        </div>

        {/* Downsell Price Box */}
        <div className="p-4 rounded-2xl bg-red-950/40 border-2 border-dashed border-red-500/70 mb-4">
          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400">
            <span>De R$ 10,00</span>
            <span className="bg-red-500 text-white font-bold px-1.5 py-0.5 rounded text-[10px] uppercase">
              50% OFF EXTRA
            </span>
          </div>

          <div className="flex items-baseline justify-center gap-1 mt-1 mb-1">
            <span className="text-neutral-300 text-sm font-medium">Por apenas</span>
            <span className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
              R$ 5<span className="text-2xl sm:text-3xl">,00</span>
            </span>
          </div>

          <div className="text-[11px] text-neutral-300 font-medium flex items-center justify-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Valor único no PIX • Acesso vitalício imediato</span>
          </div>

          {/* Countdown timer */}
          <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1 rounded-md bg-neutral-950 border border-red-900/60 text-red-300 text-[11px] font-semibold">
            <Clock className="w-3 h-3 text-red-400" />
            <span>Esta oferta encerra em: </span>
            <span className="font-mono text-white font-bold">{timeFormatted}</span>
          </div>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-2 gap-1.5 text-left text-xs text-neutral-300 mb-5 px-1">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Acesso completo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Sem mensalidades</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Link no WhatsApp/E-mail</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Assista no celular e TV</span>
          </div>
        </div>

        {/* Main CTA Button for Downsell (R$ 5) */}
        <a
          id="downsell-checkout-button"
          href={DOWNSELL_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (window.self !== window.top) {
              try {
                window.top?.location.assign(DOWNSELL_CHECKOUT_URL);
              } catch {
                window.open(DOWNSELL_CHECKOUT_URL, '_blank');
              }
            }
          }}
          className="group relative inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-black text-base sm:text-lg tracking-wide shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-[1.02] active:scale-100 mb-3"
        >
          <span className="flex items-center gap-2">
            SIM! QUERO ASSISTIR TUDO POR R$ 5,00
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </a>

        {/* Secondary Reject Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-neutral-500 hover:text-neutral-400 underline transition-colors"
        >
          Não, prefiro sair e perder o filme por R$ 5
        </button>

        {/* Trust Badges */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-center gap-3 text-[11px] text-neutral-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Checkout Seguro Lowify
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Liberação no mesmo minuto
          </span>
        </div>
      </div>
    </div>
  );
}
