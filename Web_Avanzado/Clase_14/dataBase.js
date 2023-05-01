//Conexion a Base de Datos MongoDB

let mongoose = require('mongoose');
const server = '127.0.0.1:27017'; //local host (siempre misma direccion cuando sea local)
const database = 'nuevaDB'; //nombre de base de datos. Si no existe crea una nueva con ese nombre

async function main (){ //creo funcion asincrona esperando la conexion a mongoose. Nombre:main (puede ser cualquiera)
    await mongoose.connect(`mongodb://${server}/${database}`)
}

main()
.then((res)=>{console.log('Conexión exitosa')})
.catch((error)=>{console.log('Error en la conexión' + error)})