const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});
