//Configuración de sequelize
const Sequelize = require('sequelize');
//objeto de conexión

const sequelize = new Sequelize('test','admin','AWScontra',{
    dialect:'mysql',
    host:'database-1.c5jx3swgqvae.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});


//Cargar los modelos
const modelDefiners =[
    require('../models/database.js'),
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

//Exportar el objeto sequelize
module.exports = sequelize;
