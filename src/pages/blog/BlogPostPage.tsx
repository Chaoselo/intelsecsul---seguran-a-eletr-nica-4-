import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BLOG_ARTICLES } from '../../data/blogArticles';
import { BlogPostTemplate } from '../../components/BlogPostTemplate';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogPostTemplate
      title={article.title}
      metaDescription={article.metaDescription}
      h1={article.h1}
      category={article.category}
      readTime={article.readTime}
      publishedDate={article.publishedDate}
      intro={article.intro}
      sections={article.sections}
      ctaFinal={article.ctaFinal}
      ogImage={article.ogImage}
      whatsappMessage={article.whatsappMessage}
      internalLink={article.internalLink}
      relatedQuestions={article.relatedQuestions}
    />
  );
};
