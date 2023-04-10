
const express = require ("express");
const router = express.Router();
const {obtenerDatoUsuario, verificacionUsuario, dataProd} = require ('../controllers/usuariosControllers');

router.get("/productos", dataProd)

router.get("/usuario/:dato", obtenerDatoUsuario);

router.post("/usuarioIngresado", verificacionUsuario);

module.exports=router;