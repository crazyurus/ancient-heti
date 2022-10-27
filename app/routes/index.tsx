import React, { useEffect } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import 'heti/umd/heti.min.css';

export function loader() {
  return null;
}

function Article(): JSX.Element {
  const article = useLoaderData();

  useEffect(() => {
    import('heti/umd/heti-addon.min.js').then(module => {
      const Heti = module.default;
      const heti = new Heti('.heti');
      heti.autoSpacing();
    });
  }, []);

  return (
    <div className="heti">
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Article;
