/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const segments = [
  { description: 'Fiscal/Tributário' },
  { description: 'Pessoal/Rh' },
  { description: 'Jurídico' },
  { description: 'Treinamentos(link/produção)' },
  { description: 'Financeiro' },
  { description: 'Marketing/Estratégia' },
  { description: 'Inovação e Criatividade' },
  { description: 'Gestão e planejamento' },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const registered = await queryInterface.select(null, 'consulting_segment');

    const timestamp = new Date();

    await Promise.all(segments.map(async (segment) => {
      const foundModule = registered
        .find((registeredModule) =>
          registeredModule.description === segment.description);

      if (foundModule) {
        if (foundModule.description !== segment.description) {
          await queryInterface.update(
            null,
            'consulting_segment',
            { description: segment.description, updated_at: timestamp },
          );
        }
      } else {
        await queryInterface.insert(
          null,
          'consulting_segment',
          { ...segment, created_at: timestamp, updated_at: timestamp },
        );
      }
    }));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('consulting_segment', null, {});
  },
};
