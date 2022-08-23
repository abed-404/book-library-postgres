const express = require('express');
require('dotenv').config();

// eslint-disable-next-line import/no-unresolved
const router = require('./routes');

const { errorHandler } = require('./controllers/errors/server-error');

const app = express();

app.use(express.json());
app.use('/books', router);
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.send('Home Page'));
app.use(errorHandler);
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

module.exports = app;
