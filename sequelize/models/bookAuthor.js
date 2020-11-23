const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BookAuthors = sequelize.define('BookAuthors', {
    primary: {
      type: DataTypes.BOOLEAN,
    },
  });
  return BookAuthors;
};
