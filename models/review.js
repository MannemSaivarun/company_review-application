const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserReview = sequelize.define('reviews',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Companyname: Sequelize.STRING,
  pros: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  cons: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  ratingIndex: {
    type: Sequelize.INTEGER
  }
  
  
});


module.exports = UserReview;