const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function RecipePage({ dish, user }) {
  return (
    <Layout>
      <Navbar user={user} />
      <div className="recipeBlock container w-50 mt-5 list-group-item">
        <img className="rounded mx-auto d-block" src={`${dish.img}`} alt="..." />
        <p className="text-center h2">{`${dish.name}`}</p>
        <h4>Ingredients:</h4>
        <ul className="list-group mb-5">
          {dish.ingredient.split('\n').map((el, i) => <li className="list-group-item" key={i}>{`🧊 ${el}`}</li>)}
        </ul>
        <h4>Preparation:</h4>
        <p align="justify" className="recipe">{`${dish.recepi}`}</p>
      </div>
      <br />
    </Layout>
  );
};
