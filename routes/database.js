const express = require('express');
const router = express.Router();
const awitaController = require('../controllers/database')

//Servicio para mostrar 
router.get('/getAwita',awitaController.getAwita);
//Servicio para agregar 
router.post('/addAwita',awitaController.postAddAwita);

module.exports = router