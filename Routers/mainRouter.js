const router = require('express').Router();
const MainPage = require('../view/MainPage');
const {Dish} = require ('../db/models')

router.get('/', async (req, res) => {
  const dishes = await Dish.findAll()

  res.renderComponent(MainPage, { title: 'Start Page', dishes });
});

module.exports = router;
