import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Accordion } from '@/components/ui/Accordion';
import { faqItems } from '@/data/faq';

export const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-black">
      <Container className="max-w-3xl">
        <SectionTitle title="Preguntas Frecuentes" />
        <Accordion items={faqItems} />
      </Container>
    </section>
  );
};
