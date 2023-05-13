/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const segments = [
  { id: 1, licenseTypes: [1] },
  { id: 2, licenseTypes: [1] },
  { id: 3, licenseTypes: [1] },
  { id: 4, licenseTypes: [1] },
  { id: 5, licenseTypes: [2, 3, 4, 5] },
  { id: 6, licenseTypes: [2, 3, 4, 5] },
  { id: 7, licenseTypes: [2, 3, 4, 5] },
  { id: 8, licenseTypes: [2, 3, 4, 5] },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();

    await Promise.all(segments.map(async (segment) => {
      await Promise.all(segment.licenseTypes.map(async (type) => {
        await queryInterface.insert(
          null,
          'consulting_segment_license_type',
          {
            consulting_segment_id: segment.id,
            license_type_id: type,
            created_at: timestamp,
            updated_at: timestamp,
          },
        );
      }));
    }));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('consulting_segment_license_type', null, {});
  },
};
