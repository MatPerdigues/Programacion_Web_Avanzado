const express=require('express');
const router=express.Router();
const upload=require('../multer/cargaImagen') 
const {infoCompleta,agregarPelicula} = require('../controllers/controllers')

router.get('/',infoCompleta);

router.post("/cargarImagen",upload.single('imagen'),agregarPelicula);

module.exports=router;