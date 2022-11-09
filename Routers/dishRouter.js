const router = require('express').Router();
const DishPage = require('../view/DishPage');
const { Dish } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(DishPage);
});

module.exports = router;
