'use strict';
module.exports = (sequelize, DataTypes) => {
  var Telepon = sequelize.define('Telepon', {
    nomor_telepon: DataTypes.STRING
  }, {
    underscored: true,
  });
  Telepon.associate = async (models) => {
    // associations can be defined here
    // associations can be defined here
    await Telepon.belongsTo(models.Siswa,{
      foreignKey:'id',
      as:'siswa'
    })
  };
  return Telepon;
};