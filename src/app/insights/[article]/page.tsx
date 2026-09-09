import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import ArticleTemplate from './components/ArticleTemplate';

export async function generateStaticParams() {
  return articles.map((a) => ({ article: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article: slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} - AgencyStudio Insights`,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      authors: [article.author],
      publishedTime: article.date,
      ...(article.image ? { images: [{ url: article.image, width: 1200, height: 630 }] } : {}),
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ article: string }> }) {
  const { article: slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return <ArticleTemplate article={article} />;
}
