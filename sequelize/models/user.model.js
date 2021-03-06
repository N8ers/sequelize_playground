const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  return User;
};
