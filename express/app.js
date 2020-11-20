const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);

app.get('/', (req, res) => res.send('I work!'));

module.exports = app;
