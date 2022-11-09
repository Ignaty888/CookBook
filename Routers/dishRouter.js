const router = require('express').Router();
const DishPage = require('../view/DishPage');
const { Dish } = require('../db/models');

router
  .get('/', (req, res) => {
    res.renderComponent(DishPage);
  })
  .post('/', async (req, res) => {
    const { seed } = req.body;
    try {
      const dishes = await Dish.bulkCreate(seed);
      res.json({ status: 'success' });
    } catch (error) {
      res.json({ status: 'error', message: error.message });
    }
  });

module.exports = router;
