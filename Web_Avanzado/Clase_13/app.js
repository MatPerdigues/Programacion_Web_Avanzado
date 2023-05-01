

require('./dataBase'); //importo database desde dataBase.js
let mongoose = require('mongoose');
let datoPersona = require('./model');


let unaPersona = new datoPersona(
    {nombre:'Matias',
    apellido: 'Teran',
    edad: 33}
)

unaPersona.save(); 