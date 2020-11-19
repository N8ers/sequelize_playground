const { Sequelize } = require('sequelize');

// connect to the database
const sequelize = new Sequelize('sequelize_sandbox_v1', 'postgres', '2345', {
  host: 'localhost',
  dialect: 'postgres',
});

const modelDefiners = [
  require('./models/user.model'),
  require('./models/instrument.model'),
];

// define all models according to their files
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;
