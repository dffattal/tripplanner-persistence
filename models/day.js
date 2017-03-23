/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel')
var Activity = require('./activity')
var Restaurant = require('./restaurant')


var Day = db.define('day',{
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

// associations are in the index folder...

module.exports = Day;
