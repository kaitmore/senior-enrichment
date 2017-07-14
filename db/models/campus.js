'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


var Campus = db.define('campus', {
  name: Sequelize.STRING,
  picture: {
    type: Sequelize.STRING,
    defaultValue: './jupiter.jpg'
  }
});

module.exports = Campus;