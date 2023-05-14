

const {traerDoc,busquedaDoc,actualizarPlato,eliminarPlato, cargarPlato}=require('../utils/funcionesDB');


const traerInfo=async(req,res)=>{
    let info = await traerDoc();
    console.log(info);
    res.send(info);
}

const traerUnDato = async(req,res)=>{
    let dato=req.params.nombreP;
    let info = await busquedaDoc({nombrePlato:dato});
    console.log(info);
    res.send(info)
}

const agregarUnPlato = (req,res)=>{

}

module.exports = {traerInfo, traerUnDato, agregarUnPlato};