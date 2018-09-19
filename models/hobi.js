'use strict';
module.exports = (sequelize, DataTypes) => {
  let Hobi = sequelize.define('Hobi', {
    nama_hobi: DataTypes.STRING
  }, {
    underscored: true,
  });
  Hobi.associate = async(models) =>{
    // associations can be defined here
     await Hobi.belongsToMany(models.Siswa,{
      onUpdate:'cascade',
      onDelete:'cascade',
      through:'Hobi_siswa',
      foreignKey:'id_hobi',
      as:'hobi'
    })
  };
  return Hobi;
};