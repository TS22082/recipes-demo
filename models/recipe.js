module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    text: DataTypes.STRING
  });

  Recipe.associate = models => {
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipe;
};
