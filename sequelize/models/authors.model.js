const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Author = sequelize.define('Author', {
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
    timestamps: false,
  });

  Author.associate = (models) => {
    Author.hasMany(models.books, {
      through: {
        model: models.BookAuthors,
      },
    });
  };

  return Author;
};
