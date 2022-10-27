import React, { useEffect } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getRandomArticle } from '../models/article.server';
import type { Article } from '../models/article.server';
import hetiStyle from 'heti/umd/heti.min.css';
import pageStyle from '../styles/index.css';

export const links = () => [
  { rel: 'stylesheet', href: hetiStyle },
  { rel: 'stylesheet', href: pageStyle }
];

export async function loader() {
  const article = await getRandomArticle();

  return json<Article>(article);
}

function Index(): JSX.Element {
  const article: Article = useLoaderData();
  const { title, type, author, foreword, content } = article;
  const formatContent = content.split('\n').map(sentence => {
    return <p>{sentence}</p>;
  });

  useEffect(() => {
    import('heti/umd/heti-addon.min.js').then(module => {
      const Heti = module.default;
      const heti = new Heti('.heti');
      heti.autoSpacing();
    });

    document.title = title;
  }, []);

  return (
    <div className={`container heti heti--classic heti--${type}`}>
      <h1>{title}</h1>
      <p className="heti-meta heti-small">〔{author.dynasty}〕<abbr title={author.name}>{author.name}</abbr></p>
      {foreword ? <blockquote>{foreword}</blockquote> : null}
      {formatContent}
    </div>
  );
}

export default Index;
