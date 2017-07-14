'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Student = db.define('student', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    picture: {
        type: Sequelize.STRING,
        defaultValue: function () {
            const getRandomInt = () => {
                return Math.floor(Math.random() * (10000 - 5)) + 4;
            }
            return "http://graph.facebook.com/v2.5/" + getRandomInt() + "/picture?height=200&width=200";
        }
    }
}
)

module.exports = Student;