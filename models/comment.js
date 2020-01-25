module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    text: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  });

  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comment;
};
