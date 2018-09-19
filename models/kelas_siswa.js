'use strict';
module.exports = (sequelize, DataTypes) => {
  let Kelas_siswa = sequelize.define('Kelas_siswa', {
    nama_kelas: DataTypes.STRING
  }, {
    underscored: true,
  });
  Kelas_siswa.associate = async(models)=> {
    // associations can be defined here
      await Kelas_siswa.hasMany(models.Siswa,{
    	foreignKey:'id_kelas',
    	as:'siswa'
    });
  };
  return Kelas_siswa;
};