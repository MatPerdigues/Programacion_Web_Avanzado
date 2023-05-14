const mongoose = require('mongoose');

let modeloPlato = new mongoose.Schema({
    nombrePlato:{
        type:String,
        required: true
    },
    precio:{
        type:Number,
        
    }, 
    stock:{
        type:Number,
        
    },
    categoria:{type:String
    }
       

})

module.exports=mongoose.model('platos',modeloPlato);
