const express = require('express'); // los routes requieren necesariamente de express
const router=express.Router();
const {traerInfo, traerPlato, cargarPlato,prueba} = require('../controllers/controllers') 


router.get('/prueba',prueba);

router.get('/infoCompleta',traerInfo);

router.get('/traerPlato', traerPlato);

router.post('/cargarPlato', cargarPlato)

module.exports=router;