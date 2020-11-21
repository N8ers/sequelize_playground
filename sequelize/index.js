const { Sequelize } = require('sequelize');

// connect to the database
const sequelize = new Sequelize({
  databse: process.env.DATABASE,
  username: 'postgres',
  password: process.env.PASSWORD,
  host: process.env.HOST,
  dialect: 'postgres',
});

const modelDefiners = [
  require('./models/user.model'),
  require('./models/instrument.model'),
  require('./models/authors.model'),
  require('./models/books.model'),
];

// define all models according to their files
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;
