// DROPS tables if they exist, then recreates them

require('dotenv').config();

const sequelize = require('../sequelize');

function syncModels() {
  sequelize.sync({
    logging: console.log,
    force: true,
  });
}

syncModels();
