import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function UrgencyTimer() {
  const [secondsLeft, setSecondsLeft] = useState<number>(14 * 60 + 35);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div id="urgency-timer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
      <Clock className="w-3.5 h-3.5 text-red-400 animate-pulse" />
      <span>Oferta por tempo limitado:</span>
      <span className="font-mono text-red-200 bg-red-900/60 px-2 py-0.5 rounded text-xs">
        {formattedTime}
      </span>
    </div>
  );
}
