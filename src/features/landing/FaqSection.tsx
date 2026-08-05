import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Accordion } from '@/components/ui/Accordion';
import { faqs } from '@/data/faq';
import { useTranslations } from 'next-intl';

export const FaqSection = () => {
  const t = useTranslations('FAQ');

  return (
    <section id="faq" className="py-24 bg-black">
      <Container className="max-w-4xl relative z-10">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} centered />
        
        <div className="mt-16 space-y-4">
          <Accordion items={faqs.map(f => ({ question: t(`items.${f.key}.question`), answer: t(`items.${f.key}.answer`) }))} />
        </div>
      </Container>
    </section>
  );
};
