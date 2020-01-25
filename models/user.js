module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = models => {
    User.hasMany(models.Recipe, {
      onDelete: "cascade"
    });

    User.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };

  return User;
};
