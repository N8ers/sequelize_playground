const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  return Book;
};
