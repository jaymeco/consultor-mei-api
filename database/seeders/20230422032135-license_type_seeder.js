'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('license_type', [
      {
        name: 'Gratuito',
        description: 'Individual (MEi e ME)',
        value: 0,
        donate_value: 0,
        period: 'Vitálicio',
        pagseguro_url: 'https://google.com',
        promo_date: new Date(),
        promo_value: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Administrador',
        description: 'Individual (MEi e ME)',
        value: 0,
        donate_value: 0,
        period: 'Vitálicio',
        pagseguro_url: 'https://google.com',
        promo_date: new Date(),
        promo_value: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Econômico',
        description: 'Individual (MEi)',
        value: 120,
        donate_value: 6,
        period: '6 meses',
        pagseguro_url: 'https://google.com',
        promo_date: new Date(),
        promo_value: 60,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Exclusivo',
        description: 'Individual (MEi)',
        value: 240,
        donate_value: 12,
        period: '6 meses',
        pagseguro_url: 'https://google.com',
        promo_date: new Date(),
        promo_value: 120,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Business',
        description: 'Individual (ME)',
        value: 390,
        donate_value: 18,
        period: '6 meses',
        pagseguro_url: 'https://google.com',
        promo_date: new Date(),
        promo_value: 195,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Premium',
        description: 'Individual (ME)',
        value: 780,
        donate_value: 24,
        period: '6 meses',
        pagseguro_url: 'https://google.com',
        promo_date: new Date(),
        promo_value: 380,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('license_type', null, {});
  },
};
