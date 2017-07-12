'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var Campus = require('./campus')

var Student = db.define('student', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = Student;