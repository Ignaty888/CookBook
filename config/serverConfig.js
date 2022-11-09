const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const { sessionConfig } = require('./sessionConfig');
const reactSSR = require('../middleware/ssr');

module.exports = function configApp(app) {
  app.use(morgan('dev'));
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.static('public'));
  app.use(reactSSR);
};
