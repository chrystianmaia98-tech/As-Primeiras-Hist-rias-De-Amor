import { VIDEO_EMBED_URL } from '../types';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section id="video-preview-section" className="w-full max-w-md mx-auto my-6 px-4">
      <div className="relative rounded-2xl p-2 bg-gradient-to-b from-neutral-800/80 via-neutral-900 to-neutral-950 border border-neutral-800 shadow-2xl shadow-rose-950/20">
        <div className="flex items-center justify-between px-3 py-2 text-xs text-neutral-400 border-b border-neutral-800/80 mb-2">
          <span className="flex items-center gap-1.5 font-medium text-rose-400">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            Prévia Oficial do Filme
          </span>
          <span className="flex items-center gap-1 text-neutral-400">
            <Play className="w-3 h-3 text-neutral-300 fill-neutral-300" />
            9:16 Vertical
          </span>
        </div>

        {/* The video container */}
        <div className="w-full overflow-hidden rounded-xl bg-black shadow-inner">
          <iframe
            id="dorama-preview-video"
            src={VIDEO_EMBED_URL}
            style={{ width: '100%', aspectRatio: '9/16', border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            title="Prévia do filme As Primeiras Histórias de Amor"
          />
        </div>

        <p className="text-center text-xs text-neutral-400 mt-2.5 pb-1">
          👆 Assista à prévia acima para ver um trecho desta história emocionante!
        </p>
      </div>
    </section>
  );
}
