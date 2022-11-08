const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="style/bootstrap.min.css" />
        <script defer src="/js/client.js" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
