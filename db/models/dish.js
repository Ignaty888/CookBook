const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, FavoriteDish }) {
      Dish.FavoriteDish = Dish.hasMany(FavoriteDish, { foreignKey: 'dish_id' });
      // Dish.belongsToMany(User, { through: FavoriteDish, foreignKey: 'dish_id', otherKey: 'user_id' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.TEXT,
    },
    ingredient: {
      type: DataTypes.TEXT,
    },
    ingredientCount: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.INTEGER,
    },
    recepi: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  Dish.init(attributes, {
    sequelize,
    modelName: 'Dish',
    tableName: 'Dishes',
  });
  return Dish;
};
