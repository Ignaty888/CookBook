const router = require('express').Router();
const bcrypt = require('bcrypt');
const RegPage = require('../view/RegPage');
const { User } = require('../db/models');
const { getUser } = require('../middleware/getUser');

router.get('/', async (req, res) => {
  res.renderComponent(RegPage, { title: 'Registration', user: '' });
});
router.post('/', async (req, res) => {
  const {
    login, email, password, passwordRepeat,
  } = req.body;
  if (login.length === 0 || password.length === 0 || passwordRepeat.length === 0) {
    res.status(403).json({ status: 'error', message: 'Заполните все поля.' });
    return;
  }
  if (password !== passwordRepeat) {
    res.status(403).json({ status: 'error', message: 'Пароли должны совпадать.' });
    return;
  }
  if (password.length <= 7) {
    res.status(403).json({ status: 'error', message: 'Слишком короткий пароль.' });
  }
  // if (password !== /[A-Z]/ && password !== /[a-z]/ && password !== /^[A-Za-z\d]/ && password !== /\d/) {
  //    res.status(403).json({ status: 'error', message: 'Пароль не подходит' });
  // }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, email, password: hash });
    req.session.userId = newUser.id;
    res.status(201).json({ status: 'success', url: '/' });
    return;
  }
  if (user.email === email) {
    res.status(403).json({ status: 'error', message: 'Такой пользователь уже существует' });
  }
});

module.exports = router;
