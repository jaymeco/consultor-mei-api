'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_type', [
      {
        description: 'Administrador',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: 'Cliente',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: 'Consultor',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: 'Comercial',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_type', null, {});
  },
};
