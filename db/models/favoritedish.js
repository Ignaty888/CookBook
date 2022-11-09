const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavoriteDish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Dish }) {
      FavoriteDish.belongsTo(User, { foreignKey: 'user_id' });
      FavoriteDish.belongsTo(Dish, { foreignKey: 'dish_id' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    dish_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Dishes',
        key: 'id',
      },
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
  FavoriteDish.init(attributes, {
    sequelize,
    modelName: 'FavoriteDish',
    tableName: 'FavoriteDishes',
  });
  return FavoriteDish;
};
