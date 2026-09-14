import { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear and inject the exact LiteVideo web component requested
    containerRef.current.innerHTML = `
      <lt-v2 
        v="1471411f-6ded-4657-889b-3eef508d8d5b" 
        ar="9:16" 
        cc="141414" 
        cs="g" 
        ic="ff0000" 
        ib="ff0000" 
        pc="ff0000" 
        pi="square" 
        ct="[[]]"
        style="width: 100%; aspect-ratio: 9/16; display: block; border-radius: 12px; overflow: hidden;"
      ></lt-v2>
    `;

    // Ensure LiteVideo script is attached and executes
    const script = document.createElement('script');
    script.src = 'https://app.litevideo.net/p.js';
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

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
        <div 
          ref={containerRef}
          id="dorama-preview-video-container"
          className="w-full overflow-hidden rounded-xl bg-black shadow-inner min-h-[400px] flex items-center justify-center"
        >
          {/* Fallback while script mounts */}
          <div className="text-neutral-500 text-xs animate-pulse p-8 text-center">
            Carregando prévia do filme...
          </div>
        </div>

        <p className="text-center text-xs text-neutral-400 mt-2.5 pb-1">
          👆 Assista à prévia acima para ver um trecho desta história emocionante!
        </p>
      </div>
    </section>
  );
}
