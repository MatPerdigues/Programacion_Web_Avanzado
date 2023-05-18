const express = require('express');
const router = express.Router();
const {todasLasPelis, traerUnaPeli, agregarPeli, borrarPeli} = require('../controllers/controllersPeliculas');

router.get('/infoPelis', todasLasPelis);
router.get('/seleccionarPeli/:nombrePeli', traerUnaPeli);
router.post('/sumarPeli', agregarPeli);
router.delete('/eliminarPeli/:nombrePeli', borrarPeli);

module.exports=router;