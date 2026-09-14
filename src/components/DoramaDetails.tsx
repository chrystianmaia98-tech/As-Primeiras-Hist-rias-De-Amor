import { POSTER_URL } from '../types';
import { Star, Flame, Film, Tv, Headphones } from 'lucide-react';

export function DoramaDetails() {
  return (
    <section id="about-dorama-section" className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-rose-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
          Sinopse e Ficha Técnica
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Poster Container */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-rose-950/40 border border-neutral-700/80">
              <img
                src={POSTER_URL}
                alt="Pôster Oficial - As Primeiras Histórias de Amor"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-rose-400 border border-rose-500/30 flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>9.8 / 10 Nota do Público</span>
              </div>
            </div>
            <span className="text-neutral-400 text-xs mt-3 text-center">
              Pôster Oficial • Versão Completa e Sem Cortes
            </span>
          </div>

          {/* Details & Synopsis */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              As Primeiras Histórias de Amor
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-700">
                Romance & Drama
              </span>
              <span className="px-2.5 py-1 rounded-md bg-rose-950/60 text-rose-300 text-xs font-medium border border-rose-800/40">
                Viral no TikTok
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-700">
                Filme Completo
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 text-xs font-medium border border-emerald-800/40">
                Áudio Dublado & Legendado
              </span>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              Uma trama apaixonante e inesquecível que retrata as dores, a inocência e o arrebatamento do primeiro amor. Conforme os caminhos dos protagonistas se cruzam, segredos do passado e reencontros inesperados colocam à prova sentimentos que o tempo não conseguiu apagar.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Com atuações tocantes e uma trilha sonora que conquistou a internet, esse é o filme ideal para assistir e se emocionar do início ao fim.
            </p>

            {/* Quick feature pills */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-rose-400" />
                <span>Resolução Full HD 1080p</span>
              </div>
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-rose-400" />
                <span>Assista na Smart TV ou Celular</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-rose-400" />
                <span>Áudio de Cinema em Alta Fidelidade</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-rose-400" />
                <span>Acesso Permanente sem Expiração</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
