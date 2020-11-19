const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('instrument', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    purchaseDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
};
