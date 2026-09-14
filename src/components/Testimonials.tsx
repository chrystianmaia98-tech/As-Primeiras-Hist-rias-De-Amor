import { Star, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Juliana Mendes',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    time: 'Há 25 minutos',
    comment: 'Gente, eu tava procurando esse dorama há semanas depois de ver um corte no TikTok! Paguei os 10 reais no PIX e recebi o link na hora no meu WhatsApp. A qualidade do vídeo tá surreal!',
    stars: 5,
  },
  {
    name: 'Camila Rocha',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    time: 'Há 1 hora',
    comment: 'Chorei rios com essa história! Melhor compra que fiz, sem ter que pagar mensalidade cara de streaming só pra ver um filme. Vale cada centavo.',
    stars: 5,
  },
  {
    name: 'Rafael Silveira',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    time: 'Há 3 horas',
    comment: 'Espelhei direto na minha Smart TV pra assistir com a minha namorada. Vídeo liso, sem travar e dublagem muito boa. Podem comprar sem medo!',
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials-section" className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <span className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
          Quem Já Assistiu Recomenda
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          O que estão achando do filme
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                "{item.comment}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-neutral-800/80">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-9 h-9 rounded-full object-cover border border-neutral-700"
                loading="lazy"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-white">{item.name}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-[11px] text-neutral-500">{item.time} • Comprador Verificado</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
