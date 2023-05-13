'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consultant', {
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
      state: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      curriculum_path: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(false),
        allowNull: false,
        unique: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
        allowNull: false,
      },
      consulting_segment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'consulting_segment',
          key: 'id',
        },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('consultant');
  },
};
