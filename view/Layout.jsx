const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        {/* <link rel="stylesheet" href="styles/bootstrap.min.css" />
        <link rel="stylesheet" href="styles/bootstrap.css" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
        <script defer src="/js/reg.js" />
        <script defer src="/js/login.js" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
