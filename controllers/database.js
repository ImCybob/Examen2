const path = require("path");
const awita = require("../utils/database").models.awita;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

exports.getAwita = (req,res)=>{
    //SELECT * from Consola;
    awita.findAll()
        .then(awitas=>{
            console.log("Awitas",awita);
            res.send(awita);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.postAddAwita = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    awita.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}