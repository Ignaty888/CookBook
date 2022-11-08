require('@babel/register');
const express = require('express');
const configApp = require('./config/serverConfig');

// подключение роутеров

const app = express();

const PORT = 3000;

configApp(app);

// подключение роутеров

app.listen(PORT, () => {
  console.log('Тихо шуршит');
});
