import { useState, useEffect } from 'react';
import { CHECKOUT_URL, POSTER_URL } from './types';
import { UrgencyTimer } from './components/UrgencyTimer';
import { VideoSection } from './components/VideoSection';
import { OfferCard } from './components/OfferCard';
import { DoramaDetails } from './components/DoramaDetails';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ExitIntentModal } from './components/ExitIntentModal';
import { DownsellPage } from './components/DownsellPage';
import { Shield, Sparkles, Check, Film, Heart, Star } from 'lucide-react';

export default function App() {
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);
  const [isDedicatedDownsell, setIsDedicatedDownsell] = useState<boolean>(false);

  // Check URL params for direct downsell view (?oferta=5 or ?downsell=true)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('oferta') === '5' || params.get('downsell') === 'true') {
      setIsDedicatedDownsell(true);
    }
  }, []);

  // Exit intent triggers:
  // 1. Desktop cursor leaves viewport at the top (attempting to close tab or change URL)
  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 25 && !triggered && !isDedicatedDownsell) {
        triggered = true;
        setIsExitModalOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isDedicatedDownsell]);

  // 2. Mobile & Browser Back-button Trap / Interception:
  // Push state to browser history, and when popstate fires on "back" (user trying to exit), show the R$ 5 downsell modal!
  useEffect(() => {
    if (isDedicatedDownsell) return;

    try {
      window.history.pushState({ page: 'dorama-offer' }, '', window.location.href);

      const handlePopState = () => {
        setIsExitModalOpen(true);
        // Push state again so clicking back a second time keeps modal visible
        window.history.pushState({ page: 'dorama-offer' }, '', window.location.href);
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    } catch {
      // safe fallback if sandbox restricts history
    }
  }, [isDedicatedDownsell]);

  if (isDedicatedDownsell) {
    return <DownsellPage onBackToMain={() => setIsDedicatedDownsell(false)} />;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col pb-24 selection:bg-emerald-500 selection:text-black relative">
      {/* Top Urgent Notification Ribbon */}
      <header id="top-notification-bar" className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-2 px-4 text-center text-xs sm:text-sm font-semibold text-white tracking-wide shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          <span>
            🔥 <strong>ATENÇÃO:</strong> O filme que viralizou nas redes sociais liberado com <strong>75% de desconto</strong> só hoje!
          </span>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 pt-5 sm:pt-8 flex flex-col items-center">
        {/* Header Hero with Cover at the Beginning */}
        <div className="text-center max-w-2xl mx-auto mb-6 flex flex-col items-center">
          <div className="mb-4">
            <UrgencyTimer />
          </div>

          {/* CAPA DO FILME NO COMEÇO */}
          <div id="movie-cover-hero" className="flex flex-col items-center mb-5">
            <div className="relative group w-48 sm:w-60 rounded-2xl overflow-hidden shadow-2xl shadow-rose-950/70 border-2 border-rose-500/50 hover:border-rose-400 transition-all duration-300 transform hover:scale-[1.03]">
              <img
                src={POSTER_URL}
                alt="Capa Oficial do Filme - As Primeiras Histórias de Amor"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-rose-300 border border-rose-500/40 flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>9.8 / 10</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-2.5 text-center">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-300 flex items-center justify-center gap-1">
                  <Film className="w-3.5 h-3.5 text-rose-400" /> Capa Oficial do Filme
                </span>
              </div>
            </div>
            <span className="text-neutral-400 text-xs mt-2 font-medium">
              Pôster Oficial • Versão Completa em Alta Resolução
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            Filme Em Alta no Momento
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            As Primeiras Histórias de Amor
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            A emocionante história que parou a internet. Assista ao filme completo em alta resolução por um valor simbólico de apenas <strong>R$ 10,00</strong>!
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5 text-xs text-neutral-300">
            <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Filme Completo
            </span>
            <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Áudio & Legenda em Português
            </span>
            <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Sem Mensalidade
            </span>
            <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Acesso Vitalício
            </span>
          </div>
        </div>

        {/* Video Preview Embed */}
        <VideoSection />

        {/* Primary Checkout Offer Card */}
        <OfferCard id="primary-offer-card" />

        {/* About the Dorama with the requested poster image */}
        <DoramaDetails />

        {/* Why choose this offer section */}
        <section id="why-choose-section" className="w-full max-w-4xl mx-auto my-6 px-4">
          <div className="rounded-3xl bg-neutral-900/40 border border-neutral-800/80 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-6">
              Por que aproveitar essa oferta agora?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl font-bold">
                  ⚡
                </div>
                <h4 className="font-bold text-white text-base mb-1">Acesso Imediato</h4>
                <p className="text-xs text-neutral-400">
                  Pagou pelo PIX? Em segundos o link chega no seu e-mail e WhatsApp para você começar a assistir.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-xl font-bold">
                  🚫
                </div>
                <h4 className="font-bold text-white text-base mb-1">Sem Propagandas</h4>
                <p className="text-xs text-neutral-400">
                  Chega de sites cheios de vírus e anúncios travando. Player limpo e direto ao ponto.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl font-bold">
                  💰
                </div>
                <h4 className="font-bold text-white text-base mb-1">Preço Justo (R$ 10)</h4>
                <p className="text-xs text-neutral-400">
                  Menos que um lanche na padaria para ter o filme completo para sempre, sem cobrança recorrente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <Testimonials />

        {/* 7 Days Guarantee Badge */}
        <section id="guarantee-section" className="w-full max-w-3xl mx-auto my-8 px-4">
          <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Garantia Incondicional de 7 Dias
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Você não tem risco algum! Se por qualquer motivo você não gostar ou tiver qualquer problema para assistir, devolvemos 100% do seu dinheiro de forma rápida e sem burocracia.
              </p>
            </div>
          </div>
        </section>

        {/* Final Secondary Offer Card */}
        <OfferCard id="secondary-offer-card" badgeText="ÚLTIMAS VAGAS COM VALOR PROMOCIONAL" />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <footer id="page-footer" className="w-full border-t border-neutral-900 mt-12 py-8 text-center text-xs text-neutral-500 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-neutral-400 font-semibold">
            <Film className="w-4 h-4 text-rose-500" />
            <span>As Primeiras Histórias de Amor • Distribuição Exclusiva</span>
          </div>
          <p>
            Pagamento processado com tecnologia e segurança de ponta pela plataforma Lowify.
          </p>
          <p className="text-neutral-600 text-[11px] mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Sticky Bottom Bar for Mobile & Quick Conversions */}
      <StickyBottomBar />

      {/* Exit Intent Pop-up Modal with R$ 5,00 Special Offer */}
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
      />
    </div>
  );
}
