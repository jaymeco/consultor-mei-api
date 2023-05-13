/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const statusList = [
  { description: 'Concluído' },
  { description: 'Encerrado' },
  { description: 'Aprovado' },
  { description: 'Não Aprovado' },
  { description: 'Solicitado' },
  { description: 'Pagamento confirmado' },
  { description: 'Aguardo confirmação do Pagamento' },
  { description: 'Aguardando Atendimento' },
  { description: 'Em Atendimento' },
  { description: 'Pergunta Realizada' },
  { description: 'Em Análise' },
  { description: 'Em Transferência' },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const registered = await queryInterface.select(null, 'status');

    const timestamp = new Date();

    await Promise.all(statusList.map(async (status) => {
      const foundModule = registered
        .find((registeredModule) =>
          registeredModule.description === status.description);

      if (foundModule) {
        if (foundModule.description !== status.description) {
          await queryInterface.update(
            null,
            'status',
            { description: status.description, updated_at: timestamp },
          );
        }
      } else {
        await queryInterface.insert(
          null,
          'status',
          { ...status, created_at: timestamp, updated_at: timestamp },
        );
      }
    }));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('consulting_segment', null, {});
  },
};
