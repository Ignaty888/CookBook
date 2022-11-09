const router = require('express').Router();
const LogPage = require('../view/LogPage');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  res.renderComponent(LogPage, { title: 'Start Page', user: '' });
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  res.app.locals.user = { email };
  // console.log(res.app.locals.user);
  const userLoginDb = await User.findOne({ where: { email } });

  if (!userLoginDb) {
    res.status(403).json({ status: 'error', message: 'Такой пользователь не зарегистрирован.' });
    return;
  }
  if (userLoginDb.password !== password) {
    res.status(403).json({ status: 'error', message: 'Пароль не верный' });
    return;
  }
  res.status(201).json({ status: 'success', url: '/' });
});

module.exports = router;
