import { CHECKOUT_URL } from '../types';
import { ShieldCheck, Zap, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface OfferCardProps {
  id?: string;
  badgeText?: string;
}

export function OfferCard({ id = "main-offer-card", badgeText = "OFERTA EXCLUSIVA DE LANÇAMENTO" }: OfferCardProps) {
  return (
    <div
      id={id}
      className="relative w-full max-w-xl mx-auto my-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-neutral-900 via-neutral-900 to-black border-2 border-emerald-500/50 shadow-2xl shadow-emerald-950/40 text-center overflow-hidden"
    >
      {/* Glow overlay */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-40 bg-emerald-500/15 blur-3xl pointer-events-none rounded-full" />

      {/* Top Banner / Badge */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold tracking-wider mb-4 uppercase">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        {badgeText}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        Acesso Imediato ao Filme Completo
      </h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Receba o filme completo em Full HD com áudio e legendas em português. Sem assinaturas, sem surpresas.
      </p>

      {/* Pricing block */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 mb-6">
        <div className="text-neutral-400 text-sm line-through mb-1">
          De R$ 39,90
        </div>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
            Economize 75%
          </span>
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-neutral-300 text-lg font-medium">Por apenas</span>
          <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            R$ 10<span className="text-2xl sm:text-3xl text-emerald-400">,00</span>
          </span>
        </div>
        <div className="text-xs text-neutral-400 mt-1 flex items-center justify-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Pagamento Único via PIX ou Cartão • Sem Mensalidades</span>
        </div>
      </div>

      {/* Highlights List */}
      <ul className="text-left space-y-2.5 mb-6 text-sm text-neutral-200 max-w-md mx-auto">
        <li className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span><strong>Filme completo</strong> sem cortes e sem propagandas</span>
        </li>
        <li className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span><strong>Liberação instantânea</strong> no seu e-mail e WhatsApp via PIX</span>
        </li>
        <li className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Assista direto no celular, TV, tablet ou computador</span>
        </li>
        <li className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Qualidade máxima em <strong>Full HD 1080p</strong></span>
        </li>
      </ul>

      {/* Big Action CTA Button */}
      <a
        id="cta-buy-now-button"
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
        className="group relative inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-neutral-950 text-base sm:text-lg font-extrabold tracking-wide shadow-xl shadow-emerald-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <span className="flex items-center gap-2">
          QUERO ASSISTIR AGORA POR R$ 10
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </span>
      </a>

      {/* Trust & Guarantee indicators */}
      <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Checkout 100% Seguro (Lowify)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Entrega Imediata</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Garantia de 7 Dias</span>
        </div>
      </div>
    </div>
  );
}
