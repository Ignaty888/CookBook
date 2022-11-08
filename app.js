require('@babel/register');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ssr = require('./middleware/ssr');

const app = express();

const PORT = 3000;

const sessionConfig = require('./config/session');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(express.static('public'));
app.use(cookieParser());
app.use(session(sessionConfig));

app.listen(PORT, () => {
  console.log('Тихо шуршит');
});
