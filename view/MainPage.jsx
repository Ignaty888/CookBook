const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const DishCard = require('./DishCard')

module.exports = function MainPage({ user, title, dishes }) {
  return (
    <Layout title={title}>
      <Navbar user={user} />
      <div className='container d-flex row p-2 justify-content-center alogn-items-center mt-3 ' >
        {dishes.map((dish) => {
          return <DishCard key={dish.id} dish={dish} />
        })}
      </div>

    </Layout>
  );
};
