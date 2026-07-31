import React from 'react';
import { Container } from '@/components/ui/Container';
import { newsArticles } from '@/data/news';
import { Card } from '@/components/ui/Card';

export const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-neutral-900/50">
      <Container>
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Noticias y Tendencias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map(article => (
            <Card key={article.id} className="p-0 overflow-hidden flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-gold-500 text-xs uppercase tracking-wider mb-2">{article.category}</span>
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-neutral-400 text-sm mb-4 flex-1">{article.excerpt}</p>
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>{article.date}</span>
                  <span>{article.readTime} lect.</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
