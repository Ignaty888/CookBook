const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const DishCard = require('./DishCard');

module.exports = function MainPage({ user, title, dishes }) {
  return (
    <Layout title={title}>
      <Navbar user={user} />

      <div className="container d-flex row p-2 justify-content-center alogn-items-center mt-3 ">
        <select className="form-select" aria-label="Default select example">
          <option selected>Sort by</option>
          <option value="1">Time desc ⬆</option>
          <option value="2">Time asc ⬇</option>
          <option value="3">Ingredient desc ⬆</option>
          <option value="4">Ingredient asc ⬇</option>
        </select>
        {dishes.map((dish) => <DishCard key={dish.id} dish={dish} user={user} />)}
      </div>

    </Layout>
  );
};
