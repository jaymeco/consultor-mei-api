/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('user', 'license_id');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('user', 'license_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'license',
        key: 'id',
      },
      allowNull: true,
    });
  },
};
