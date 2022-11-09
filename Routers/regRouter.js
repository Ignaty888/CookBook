const router = require('express').Router();
const RegPage = require('../view/RegPage');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  res.renderComponent(RegPage, { title: 'Start Page' });
});
router.post('/', async (req, res) => {
  const {
    login, email, password, passwordRepeat,
  } = req.body;
  const user = await User.findOne({ where: { login } });
  if (!user) {
    if (!user) {
      if (login.length === 0 || password.length === 0 || passwordRepeat.length === 0) {
        return res.status(403).json({ status: 'error', message: 'Заполните все поля.' });
      }
      if (password !== passwordRepeat) {
        return res.status(403).json({ status: 'error', message: 'Пароли должны совпадать.' });
      }
      // if (password.length <= 7) {
      //   return res.status(403).json({ status: 'error', message: 'Слишком короткий пароль.' });
      // }
      // if (password !== /[A-Z]/ && password !== /[a-z]/ && password !== /^[A-Za-z\d]/ && password !== /\d/) {
      //   return res.status(403).json({ status: 'error', message: 'Пароль не подходит' });
      // }

      const newUser = await User.create({ login, email, password });
      req.session.userId = newUser.id;

      return res.status(201).json({ status: 'success', url: '/' });
    }
  }
});

// router.post('/', async (req, res) => {
//   const { login, password, passwordRepeat } = req.body;
//   const user = await User.findOne({ where: { login } });
//   if (!user) {
//     if (login.length === 0 || password.length === 0 || passwordRepeat.length === 0) {
//       return res.status(403).json({ status: 'error', message: 'Заполните все поля.' });
//     }
//     if (password !== passwordRepeat) {
//       return res.status(403).json({ status: 'error', message: 'Пароли должны совпадать.' });
//     }
//     if (password.length <= 7) {
//       return res.status(403).json({ status: 'error', message: 'Слишком короткий пароль.' });
//     }
//     if (password !== /[A-Z]/ && password !== /[a-z]/ && password !== /^[A-Za-z\d]/ && password !== /\d/) {
//       return res.status(403).json({ status: 'error', message: 'Пароль не подходит' });
//     }

//     await User.create({ login, password });

//     return res.status(201).json({ status: 'success', url: '/' });
//   }
// });

module.exports = router;
