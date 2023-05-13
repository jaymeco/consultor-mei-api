/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consulting_segment_license_type', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      consulting_segment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'consulting_segment',
          key: 'id',
        },
      },
      license_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'license_type',
          key: 'id',
        },
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('consulting_segment_license_type');
  },
};
