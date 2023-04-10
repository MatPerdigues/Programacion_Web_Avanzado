
const infoUsuarios = require("../usuariosInfo.json")

const infoProd = require("../infoProd.json");

const obtenerDatoUsuario = (req,res)=>{

    let datoParam=req.params.dato;

    let usuarioRequerido= infoUsuarios.find((datos)=>datos.usuario == datoParam )

    res.send(usuarioRequerido);

}

const verificacionUsuario = (req, res)=>{
    let infoForm = req.body; 

    console.log(infoForm);

    let usuarioRegistrado = infoUsuarios.find((dato)=>dato.usuario===infoForm.usuario);

    console.log(usuarioRegistrado);

    if (usuarioRegistrado !== undefined){
        res.send ("El usuario ya se encuentra registrado");
    } else {
        res.send("No se encuentra el usuario");
    }
    res.send("ok");
}

const dataProd = (req,res)=>{
    let info = infoProd;

    res.send(info)
}

module.exports={obtenerDatoUsuario, verificacionUsuario, dataProd};