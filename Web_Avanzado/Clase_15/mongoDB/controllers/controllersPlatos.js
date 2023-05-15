

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

const agregarUnPlato = async(req,res)=>{
   // let info = req.body; con esto genero que toda la info json que viene en el body del request se tomo como una sola variable por lo que podemos desestructurarla en varias variables de la siguiente manera
   const {nombrePlato,precio,stock,categoria} = req.body; //aca estoy generando 4 variables que van a poder ser utilizadas como los parametros requeridos en la creacion de la funcion
   let respuesta = await cargarPlato(nombrePlato,precio,stock,categoria);
   console.log(respuesta);
    res.send('OK');

}

module.exports = {traerInfo, traerUnDato, agregarUnPlato};