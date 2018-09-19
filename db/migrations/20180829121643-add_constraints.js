 'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      let siswa = await queryInterface.addConstraint('Siswas',['id_kelas'], {
       type: 'foreign key',
       name: ' fkey_siswas_for_kelas_siswas',
       references: { //Required field
          table: 'kelas_siswas',
          field: 'id'
       },
      onDelete: 'cascade',
      onUpdate: 'cascade'
   });

     let telepon = await queryInterface.addConstraint('Telepons', ['id'], {
        type: 'foreign key',
        name: 'fkey_telepons_for_siswas',
        references: { //Required field
          table: 'siswas',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });

      let hobi_id_siswa = await queryInterface.addConstraint('Hobi_siswas', ['id_siswa'], {
        type: 'foreign key',
        name: 'fkey_hobisiswas_for_id_siswas',
        references: { //Required field
          table: 'siswas',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

     let siswa_id_hobi = await queryInterface.addConstraint('Hobi_siswas', ['id_hobi'], {
        type: 'foreign key',
        name: 'fkey_hobisiswas_for_id_hobis',
        references: { //Required field
          table: 'hobis',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

   Promise.all([siswa,telepon,hobi_id_siswa,siswa_id_hobi]).then(function(){
      console.log('== addConstraint OK ==');
   })
 

  },

  down: async (queryInterface, Sequelize) => {
     return [
       
         await queryInterface.removeConstraint('Siswas', 'fkey_siswas_for_kelas_siswas'),
         await queryInterface.removeIndex('Siswas', 'fkey_siswas_for_kelas_siswas'),

         await  queryInterface.removeConstraint('Telepons','fkey_telepons_for_siswas'),
         await  queryInterface.removeIndex('Telepons','fkey_telepons_for_siswas'),

         await  queryInterface.removeConstraint('Hobi_siswas','fkey_hobisiswas_for_id_siswas'),
         await  queryInterface.removeIndex('Hobi_siswas','fkey_hobisiswas_for_id_siswas'),

         await  queryInterface.removeConstraint('Hobi_siswas','fkey_hobisiswas_for_id_hobis'),
         await  queryInterface.removeIndex('Hobi_siswas','fkey_hobisiswas_for_id_hobis'),
    ]  
  }
};
