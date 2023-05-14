const express= require('express');
const router = express.Router();
const {traerInfo, traerUnDato, agregarUnPlato}=require('../controllers/controllersPlatos');

router.get('/infoCompleta',traerInfo);
router.get('/infoParcial/:nombreP',traerUnDato);
router.post('/agregarPlato',agregarUnPlato);

module.exports=router;