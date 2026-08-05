'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { categories } from '@/data/categories';
import { useTranslations } from 'next-intl';

export const CategoriesSection = () => {
  const t = useTranslations('Categories');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const isPaused = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    // Use getBoundingClientRect for accurate position relative to scroll container
    const containerScrollLeft = container.scrollLeft;
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const targetScrollLeft = containerScrollLeft + (cardRect.left - containerRect.left);
    container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
  }, []);

  const goNext = useCallback(() => {
    if (isPaused.current) return;
    setActiveIdx((prev) => {
      const next = (prev + 1) % categories.length;
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  useEffect(() => {
    // Give a small delay so the component is fully mounted before starting
    const startTimeout = setTimeout(() => {
      intervalRef.current = setInterval(goNext, 3500);
    }, 1000);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext]);

  return (
    <section id="categories" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
      <Container className="relative z-10">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />
        <p className="text-neutral-400 text-center max-w-xl mx-auto mb-16 -mt-8">
          Reconocemos el talento, la dedicación y el valor de los establecimientos que lideran la industria en el Quindío.
        </p>

        {/* Modern Auto-Scrolling Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          className="flex overflow-x-auto gap-6 pb-6 pt-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:-mx-8 md:px-8"
        >
          {categories.map((cat, idx) => (
            <div key={cat.id} className="snap-center shrink-0 w-[85vw] md:w-[350px] lg:w-[400px]">
              <Card className="group relative overflow-hidden h-[450px] flex flex-col justify-end p-0 border border-white/5 bg-neutral-950 rounded-2xl transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.25)]">
                {/* Image Layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                {/* Overlay shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Number Accent */}
                <div className="absolute top-6 right-6 font-outfit text-6xl font-bold text-white/10 select-none transition-all duration-500 group-hover:text-[#d4af37]/20 group-hover:-translate-y-2">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>

                {/* Content Panel */}
                <div className="relative z-10 p-8 flex flex-col transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  {/* Accent dot */}
                  <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 bg-black/60 flex items-center justify-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-outfit tracking-wide group-hover:text-[#d4af37] transition-colors duration-500">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-40 overflow-hidden leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Bottom line decorator */}
                  <div className="w-0 h-1 bg-[#d4af37] mt-6 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { scrollToIndex(idx); setActiveIdx(idx); }}
              className={`transition-all duration-300 rounded-full ${
                activeIdx === idx
                  ? 'w-8 h-2 bg-[#d4af37]'
                  : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-400'
              }`}
              aria-label={`Ir a categoría ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
