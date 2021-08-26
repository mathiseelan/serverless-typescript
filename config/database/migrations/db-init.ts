module.exports = {

  up: async (queryInterface, Sequelize) => {
    // Transaction table
    await queryInterface.createTable('transaction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: Sequelize.DataTypes.DATEONLY,
      total: Sequelize.DataTypes.FLOAT,
      discount: Sequelize.DataTypes.DOUBLE,
      unitPrice: Sequelize.DataTypes.DOUBLE,
      quantity: Sequelize.DataTypes.INTEGER,
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("transaction");
  }
};
