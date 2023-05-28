const express=require('express');
const router=express.Router();
const upload=require('../multer/cargaImagen') 
const {infoCompleta,agregarPelicula,registrarUsuario,verificacionUsuario} = require('../controllers/controllers')

router.get('/',infoCompleta);

router.post('/login',registrarUsuario);

router.post("/cargarImagen",verificacionUsuario,upload.single('imagen'),agregarPelicula); //agrego un middleware (verificacionUsuario) que permite cargar una pelicula solo si pasa las condiciones del middleware



module.exports=router;