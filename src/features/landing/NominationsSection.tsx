import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export const NominationsSection = () => {
  return (
    <section id="nominations" className="py-24 bg-gradient-to-b from-black to-neutral-900">
      <Container className="text-center">
        <SectionTitle title="Proceso de Nominación" subtitle="Únete a la élite" />
        <p className="text-neutral-300 max-w-2xl mx-auto mb-10 text-lg">
          Las postulaciones están abiertas. Un panel de jueces expertos evaluará las métricas de desempeño, calidad de servicio e innovación.
        </p>
        <Button variant="primary">Enviar Postulación</Button>
      </Container>
    </section>
  );
};
