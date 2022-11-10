require('@babel/register');
const express = require('express');
const configApp = require('./config/serverConfig');

// подключение роутеров

const app = express();

const PORT = 3000;
const mainRouter = require('./Routers/mainRouter');
const regRouter = require('./Routers/regRouter');
const loginRouter = require('./Routers/loginRouter');
const logoutRouter = require('./Routers/logoutRouter');
const dishRouter = require('./Routers/dishRouter');
const recipeRouter = require('./Routers/recipeRouter')

configApp(app);

app.use('/', mainRouter);
app.use('/dishes', recipeRouter)
app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/api/dishes', dishRouter);

// подключение роутеров

app.listen(PORT, () => {
  console.log('Тихо шуршит');
});
