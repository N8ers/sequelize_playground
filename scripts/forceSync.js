const sequelize = require('../sequelize');

function syncModels() {
  sequelize.sync({
    logging: console.log,
    force: true,
  });
}

syncModels();
