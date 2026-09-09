import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArticleData } from '@/data/articles';
import ArticleHero from './ArticleHero';
import ArticleBody from './ArticleBody';
import ArticleRelated from './ArticleRelated';
import FinalCTA from '@/app/components/FinalCTA';

interface ArticleTemplateProps {
  article: ArticleData;
}

export default function ArticleTemplate({ article }: ArticleTemplateProps) {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero article={article} />
        <ArticleBody body={article.body} />
        <ArticleRelated currentSlug={article.slug} relatedSlugs={article.relatedSlugs} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
