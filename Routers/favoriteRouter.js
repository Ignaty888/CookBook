const router = require('express').Router();
const { Dish, FavoriteDish } = require('../db/models');
const FavoritePage = require('../view/FavoritePage');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  if (!user) {
    res.redirect('/');
  }
  const dishes = await Dish.findAll({
    // include: Dish.FavoriteDish
    // where: {
    //   'FavoriteDishes.user_id': user.id,
    // },
    include: {
      model: FavoriteDish,
      where: {
        user_id: +user.id,
      },
    },
    raw: true,
  });
  res.renderComponent(FavoritePage, { title: 'Favorite', dishes });
})
  .post('/', async (req, res) => {
    const { key } = req.body;
    const { user } = res.locals;
    let dishes;
    switch (key) {
      case '1':
        dishes = await Dish.findAll({
          order: [['time', 'ASC']],
          include: {
            model: FavoriteDish,
            where: {
              user_id: +user.id,
            },
          },
          raw: true,
        });
        break;

      case '2':
        dishes = await Dish.findAll({
          order: [['time', 'DESC']],
          include: {
            model: FavoriteDish,
            where: {
              user_id: +user.id,
            },
          },
          raw: true,
        });
        break;

      case '3':
        dishes = await Dish.findAll({
          order: [['ingredientCount', 'ASC']],
          include: {
            model: FavoriteDish,
            where: {
              user_id: +user.id,
            },
          },
          raw: true,
        });
        break;

      case '4':
        dishes = await Dish.findAll({
          order: [['ingredientCount', 'DESC']],
          include: {
            model: FavoriteDish,
            where: {
              user_id: +user.id,
            },
          },
          raw: true,
        });
        break;

      default:
        break;
    }
    res.json(dishes);
  });
module.exports = router;
