'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
     return queryInterface.bulkInsert('Kelas_siswas', [{
        nama_kelas: 'Beginner Class',
        created_at: new Date(),
        updated_at: new Date()
     }, {
        nama_kelas: 'Medium Class',
        created_at: new Date(),
        updated_at: new Date()
      },{
        nama_kelas: 'Expert Class',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('Kelas_siswas', null, {});
  }
};
