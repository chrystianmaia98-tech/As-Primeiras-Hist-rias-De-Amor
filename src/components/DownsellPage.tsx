import { DOWNSELL_CHECKOUT_URL, POSTER_URL, VIDEO_EMBED_URL } from '../types';
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DownsellPageProps {
  onBackToMain?: () => void;
}

export function DownsellPage({ onBackToMain }: DownsellPageProps) {
  const [seconds, setSeconds] = useState<number>(299);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <div id="downsell-page-view" className="min-h-screen bg-neutral-950 text-neutral-100 pb-20 selection:bg-emerald-500 selection:text-black">
      {/* Top Warning Bar */}
      <header className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-3 px-4 text-center text-xs sm:text-sm font-extrabold text-white tracking-wide shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          <span>
            🚨 <strong>ÚLTIMA OPORTUNIDADE:</strong> Você recebeu um cupom de saída exclusivo de <strong>R$ 5,00</strong>!
          </span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pt-6 sm:pt-10">
        {onBackToMain && (
          <button
            type="button"
            onClick={onBackToMain}
            className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white mb-4 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar para a página anterior
          </button>
        )}

        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-red-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-red-400" />
            OFERTA RELÂMPAGO DE SAÍDA • EXPIRA EM {timeFormatted}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Não Saia Sem o Dorama!
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Sabemos o quanto você queria assistir a <strong>As Primeiras Histórias de Amor</strong>. Para que você não fique de fora, cortamos o preço pela metade:
          </p>
        </div>

        {/* Main Downsell Box */}
        <div className="max-w-xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-neutral-900 via-neutral-900 to-black border-2 border-emerald-500 shadow-2xl shadow-emerald-950/50 text-center relative overflow-hidden mb-10">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/20 blur-3xl pointer-events-none rounded-full" />

          <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full mb-4">
            🔥 Desconto Especial de Saída Aplicado
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            As Primeiras Histórias de Amor
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6">
            Filme completo com áudio e legendas em português • Alta definição Full HD
          </p>

          {/* Pricing display */}
          <div className="p-5 rounded-2xl bg-neutral-950/90 border border-neutral-800 mb-6">
            <div className="text-neutral-500 text-sm line-through">
              De R$ 39,90 ou R$ 10,00
            </div>
            <div className="flex items-baseline justify-center gap-1.5 my-1">
              <span className="text-neutral-300 text-base font-semibold">Leve tudo por</span>
              <span className="text-5xl sm:text-6xl font-black text-emerald-400 tracking-tight">
                R$ 5<span className="text-3xl sm:text-4xl text-emerald-400">,00</span>
              </span>
            </div>
            <div className="text-xs text-amber-400 font-medium flex items-center justify-center gap-1.5 mt-2">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>Pagamento único no PIX • Acesso vitalício imediato</span>
            </div>
          </div>

          {/* Benefits */}
          <ul className="text-left space-y-2.5 mb-6 text-sm text-neutral-200 max-w-md mx-auto">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Filme completo sem cortes e sem interrupções</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Acesso enviado direto no seu e-mail e WhatsApp</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Assista no celular, computador ou Smart TV</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantia de 7 dias ou seu dinheiro de volta</span>
            </li>
          </ul>

          {/* CTA Link to Downsell Checkout */}
          <a
            id="downsell-page-checkout-button"
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
            className="group relative inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-neutral-950 text-base sm:text-lg font-black tracking-wide shadow-xl shadow-emerald-500/30 transition-transform active:scale-95"
          >
            <span className="flex items-center gap-2">
              QUERO APROVEITAR POR R$ 5,00
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              Checkout Seguro Lowify
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Acesso Garantido
            </span>
          </div>
        </div>

        {/* Video preview on downsell page too */}
        <div className="w-full max-w-sm mx-auto my-8">
          <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl text-center">
            <span className="text-xs text-rose-400 font-bold uppercase tracking-wider block mb-2">
              Lembre-se do que você está prestes a assistir:
            </span>
            <div className="rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={VIDEO_EMBED_URL}
                style={{ width: '100%', aspectRatio: '9/16', border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                title="Prévia As Primeiras Histórias de Amor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
