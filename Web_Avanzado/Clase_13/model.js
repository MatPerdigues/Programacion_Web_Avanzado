let mongoose = require('mongoose');

let scheme = new mongoose.Schema;({
    nombre: {
        type:String,
        required:true,

    },
    apellido: {
        Type: String,
    },

    edad: Number
})

module.exports=mongoose.model('colPersonas',scheme); //indico a qué base de datos le aplico el modelo de datos.