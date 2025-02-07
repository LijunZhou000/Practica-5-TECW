'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Posts', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Primer Post',
        body: 'Esta práctica implementa un Blog.',
        attachmentId: null
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Segundo Post',
        body: 'Todo el mundo puede crear posts.',
        attachmentId: null
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Tercer Post',
        body: 'Cada post puede tener una imagen adjunta.',
        attachmentId: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
