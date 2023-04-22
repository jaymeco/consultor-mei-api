'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      avatar_path: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      license_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'license',
          key: 'id',
        },
        allowNull: false,
      },
      user_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user_type',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  },
};