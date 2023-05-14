const modelPlato = require('../model/modelPlato');



//****************CREAR DOCUMENTO***************** */

const cargarPlato = async(platoNombre,nuevoPrecio,nuevoStock,nuevaCategoria)=>{
    const nuevoPlato=new modelPlato({
        nombrePlato:platoNombre,
        precio: nuevoPrecio,
        stock:nuevoStock,
        categoria:nuevaCategoria
    })
    let resultado = await modelPlato.collection.insertOne(nuevoPlato);
    console.log(resultado); 
};

//cargarPlato('Pollo al horno con papas', 1938, 4, 'no vegano');

//***************LEER DOCUMENTOS(Lista Completa)*************/

const traerDoc=async()=>{
    let platosGuardados = await modelPlato.find();

    return platosGuardados;
}

//traerDoc();

//***************LEER DOCUMENTOS(Lista Parcial)*************/

const busquedaDoc=async(filtroObjeto)=>{
    let platosBusqueda = await modelPlato.find(filtroObjeto);

    return platosBusqueda;
}

//busquedaDoc({categoria:'vegano'});

//***********************UPDATE******************/

const actualizarPlato=async(filtro,datoNuevo)=>{
    let platoActualizado = await modelPlato.updateOne(filtro,{$set:datoNuevo});
    return platoActualizado;
}

//actualizarPlato({_id:'646049ec0d8404008e3ee8b2'},{stock:23});

//busquedaDoc({_id:'646049ec0d8404008e3ee8b2'});

//**************DELETE****************/

const eliminarPlato = async(filtro)=>{
    const platoEliminado = await modelPlato.deleteOne(filtro);
    return platoEliminado;
}

module.exports={traerDoc,busquedaDoc,actualizarPlato,eliminarPlato, cargarPlato};
