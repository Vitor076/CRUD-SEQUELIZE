const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste','root','2202',{
    dialect:'mysql',
    host:'localhost',
    port:3306
})
module.exports = sequelize
