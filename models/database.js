const Sequelize = require('sequelize');
const awita = (sequelize)=>{
    sequelize.define('awita', {
        awitaID:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        nombreAwita:{
            type: Sequelize.STRING,
            allowNull:false
        },
        color:{
            type: Sequelize.STRING,
            allowNull:false
        }
    })
}
module.exports = awita