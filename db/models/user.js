const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ FavoriteDish, Dish }) {
      User.hasMany(FavoriteDish, { foreignKey: 'user_id' });
      // User.belongsToMany(Dish, { through: FavoriteDish, foreignKey: 'user__id', otherKey: 'dish_id' });
    }
  }
  User.init({
    login: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
