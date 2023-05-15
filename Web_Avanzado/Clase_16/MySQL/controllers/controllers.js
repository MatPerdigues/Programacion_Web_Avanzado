
const {cargaDePlato} = require('../utils/functionsDB')



const prueba = (req,res)=>{
    res.send('Hello World!!!')
}

const traerInfo = (req,res)=>{
    res.send('lista de platos enviada')
}

const traerPlato = (req,res)=>{
    res.send('info de plato enviada')
}

const cargarPlato = async(req,res)=>{
    let {nombrePlato,pecio,stock,categoria}=req.body;
    let resultado = await cargaDePlato(nombrePlato,pecio,stock,categoria);
    
    res.send(resultado);
}

module.exports={traerInfo, traerPlato, cargarPlato,prueba};