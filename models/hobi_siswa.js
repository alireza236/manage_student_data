'use strict';
module.exports = (sequelize, DataTypes) => {
  let Hobi_siswa = sequelize.define('Hobi_siswa', {
    id_siswa: DataTypes.INTEGER,
    id_hobi: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Hobi_siswa.associate = async(models)=> {
    // associations can be defined here
  };
  return Hobi_siswa;
};