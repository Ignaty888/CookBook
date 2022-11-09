require('@babel/register');
const express = require('express');
const configApp = require('./config/serverConfig');

// подключение роутеров

const app = express();

const PORT = 3000;
const regRouter = require('./Routers/regRouter');
const loginRouter = require('./Routers/loginRouter');
const dishRouter = require('./Routers/dishRouter');

configApp(app);

app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/api/dishes', dishRouter);

// подключение роутеров

app.listen(PORT, () => {
  console.log('Тихо шуршит');
});
