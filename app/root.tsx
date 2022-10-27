import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: '文言文',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="zh-CN">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href="//unpkg.com/heti/umd/heti.min.css" />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
