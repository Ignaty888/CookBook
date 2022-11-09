const router = require('express').Router();
const MainPage = require('../view/MainPage');

router.get('/', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
  });
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;
