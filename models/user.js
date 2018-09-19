'use strict';
module.exports =  (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    remember_token: DataTypes.STRING
  }, {
    underscored: true,
  });
  User.associate = async (models) =>  {
    // associations can be defined here
  };
  return User;
};