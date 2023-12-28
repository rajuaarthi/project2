const sequelize = require('../config');
const { DataTypes } = require('sequelize');
const User = require('./User'); // Import the User model if it exists

const Seller = sequelize.define('Seller', {
  // Seller-specific attributes here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Establish a relationship with the User model if it exists
if (User) {
  Seller.belongsTo(User);
}

module.exports = Seller;
