/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img: {
        type: Sequelize.TEXT,
      },
      ingredient: {
        type: Sequelize.TEXT,
      },
      ingredientCount: {
        type: Sequelize.INTEGER,
      },
      time: {
        type: Sequelize.TEXT,
      },
      recepi: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    await queryInterface.createTable('Dishes', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Dishes');
  },
};
