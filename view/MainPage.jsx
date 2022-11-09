const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function MainPage({ user, title }) {
  return (
    <Layout title={title}>
      <Navbar user={user} />
    </Layout>
  );
};
