/**
 * Created by lap00344 on 11/4/17.
 */
'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then(function () {
    console.log('Connection has been established successfully.');
}).catch(function (err) {
    console.error('Unable to connect to the database:', err);
});


module.exports = sequelize;