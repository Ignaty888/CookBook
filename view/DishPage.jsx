const React = require('react');
const Layout = require('./Layout');

function Dish() {
  return (
    <Layout>
      <h1>Loading.............................</h1>
      <script src="/js/dish.js" />
    </Layout>
  );
}

module.exports = Dish;
