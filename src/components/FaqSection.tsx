import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como e quando vou receber o filme?',
    answer: 'Imediatamente após a confirmação do pagamento de R$ 10,00 (no PIX cai em menos de 10 segundos). Você receberá os dados de acesso direto no seu e-mail cadastrado e também no seu WhatsApp.',
  },
  {
    question: 'É mensalidade ou pagamento único?',
    answer: 'É pagamento único de apenas R$ 10,00! Você não paga nenhuma assinatura recorrente, nem mensalidades surpresas. Pagou uma única vez e o filme é seu para assistir quando quiser.',
  },
  {
    question: 'Consigo assistir pelo celular ou na Smart TV?',
    answer: 'Sim! O filme roda perfeitamente em qualquer dispositivo: Celulares (Android e iPhone), Smart TVs, Computadores, Tablets e TV Box, com player ultra rápido.',
  },
  {
    question: 'O filme está completo e sem cortes?',
    answer: 'Sim, você terá acesso ao filme completo sem cortes, com duração total em máxima resolução Full HD (1080p), com áudio nítido e legendas em português.',
  },
  {
    question: 'É seguro comprar pela Lowify?',
    answer: 'Totalmente seguro! A Lowify é uma das plataformas de pagamentos mais seguras e conceituadas do Brasil, utilizando criptografia de ponta a ponta para proteger seus dados.',
  },
  {
    question: 'E se eu tiver alguma dúvida ou problema?',
    answer: 'Contamos com canal de suporte dedicado via WhatsApp e e-mail pronto para te auxiliar com qualquer dúvida sobre seu acesso.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="w-full max-w-3xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 text-neutral-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          Tire Suas Dúvidas
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-neutral-900/70 border border-neutral-800 overflow-hidden transition-colors duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full py-4 px-5 flex items-center justify-between text-left text-neutral-200 font-semibold text-sm sm:text-base hover:text-white transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-200 shrink-0 ml-2 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/60 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
