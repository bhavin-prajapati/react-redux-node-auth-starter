'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      field: 'id',
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      field: 'updated_at'
    },
  }, {
    timestamps: true,
    underscored: true,
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};