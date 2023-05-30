const express=require('express');
const router=express.Router();
const upload=require('../multer/cargaImagen') 
const {infoCompleta,agregarPelicula,login,verificacionUsuario,registrarAdmin} = require('../controllers/controllers')

router.get('/',infoCompleta);

router.post('/login',login);

router.post("/cargarPelicula",verificacionUsuario,upload.single('imagen'),agregarPelicula); //agrego un middleware (verificacionUsuario) que permite cargar una pelicula solo si pasa las condiciones del middleware

router.post('/nuevoAdmin',registrarAdmin)

module.exports=router;