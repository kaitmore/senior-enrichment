'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


var Campus = db.define('campus', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
});

module.exports = Campus;