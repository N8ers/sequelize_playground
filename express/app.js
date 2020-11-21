const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const authors = require('./routes/authors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);
app.use('/authors', authors);

app.get('/', (req, res) => res.send('I work!'));

module.exports = app;
