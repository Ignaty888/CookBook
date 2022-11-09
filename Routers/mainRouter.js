const router = require('express').Router();
const MainPage = require('../view/MainPage');

router.get('/', async (req, res) => {
  res.renderComponent(MainPage, { title: 'Start Page' });
});

module.exports = router;
