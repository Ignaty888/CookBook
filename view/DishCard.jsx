const React = require('react');

function DishCard({ dish, user }) {
  return (
    <div className="card w-25 h-25 m-3 p-2">
      <div className="favorite" />
      <img src={dish.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href={`/dishes/${dish.id}`} className="card-text">{dish.name}</a>
        <p>{`Время приготовления: ${Math.floor(dish.time / 60)} м`}</p>
        <br />
        <p>{`Количество ингридиентов: ${dish.ingredient.split('\n').length}`}</p>
      </div>
    </div>
  );
}
module.exports = DishCard;
