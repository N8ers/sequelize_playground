// checks current state of table in database (columns, and their data types)
// then performs the nessessary cahnges to table to match new model

require('dotenv').config();

const sequelize = require('../sequelize');

function syncModels() {
  sequelize.sync({
    logging: console.log,
    alter: true,
  });
}

syncModels();
