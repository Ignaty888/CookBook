const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { User } = require('../db/models');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

// промежуточная функция для очистки куки при истёкшей сессии на сервере
const cookiesCleaner = (req, res, next) => {
  if (req.cookies.user_uid && !req.session.userId) {
    res.clearCookie('user_uid');
    res.redirect('/');
  } else {
    next();
  }
};

// промежуточная функция проверки авторизированного пользователя
const sessionChecker = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

// промежуточная функция наполнения локальных переменных
const resLocals = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId;
  }

  next();
};

// промежуточная функция поиска пользователя в БД по ID из сессии
const getUser = async (req, res, next) => {
  if (req.session.userId) {
    res.locals.user = await User.findByPk(Number(req.session.userId), { raw: true });
  }

  next();
};

module.exports = {
  cookiesCleaner, sessionChecker, resLocals, getUser, sessionConfig,
};
