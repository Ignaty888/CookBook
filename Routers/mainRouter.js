const router = require('express').Router();
const MainPage = require('../view/MainPage');
const { Dish } = require('../db/models');

router.get('/', async (req, res) => {
  const dishes = await Dish.findAll({
    include: Dish.FavoriteDish,
    raw: true,
  });
  // console.log(dishes);
  res.renderComponent(MainPage, { title: 'CookBook', dishes });
})
  .post('/', async (req, res) => {
    const { key } = req.body;

    let dishes;
    switch (key) {
      case '1':
        dishes = await Dish.findAll({ order: [['time', 'ASC']], include: Dish.FavoriteDish, raw: true });
        break;

      case '2':
        dishes = await Dish.findAll({ order: [['time', 'DESC']], include: Dish.FavoriteDish, raw: true });
        break;

      case '3':
        dishes = await Dish.findAll({ order: [['ingredientCount', 'ASC']], include: Dish.FavoriteDish, raw: true });
        break;

      case '4':
        dishes = await Dish.findAll({ order: [['ingredientCount', 'DESC']], include: Dish.FavoriteDish, raw: true });
        break;

      default:
        break;
    }
    res.json(dishes);
  });

module.exports = router;
