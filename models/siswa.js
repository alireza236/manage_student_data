'use strict';
module.exports = (sequelize, DataTypes) => {
  var Siswa = sequelize.define('Siswa', {
    nisn: DataTypes.STRING,
    nama_siswa: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    jenis_kelamin: DataTypes.ENUM('pria','wanita'),
    id_kelas: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Siswa.associate = async (models) => {
    // associations can be defined here
    await Siswa.hasOne(models.Telepon,{
       foreignKey: 'id',
       as:'telepon'
    });

    await Siswa.belongsTo(models.Kelas_siswa,{
      foreignKey:'id_kelas',
      as:'kelas'
    })

    await Siswa.belongsToMany(models.Hobi,{
      onUpdate:'cascade',
      onDelete:'cascade',
      through:'Hobi_siswa',
      foreignKey:'id_siswa',
      as:'hobi'
    })
  };
  return Siswa;
};