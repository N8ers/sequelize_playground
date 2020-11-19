const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('I work!'));

module.exports = app;
