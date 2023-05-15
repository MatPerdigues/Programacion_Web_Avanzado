const express=require ('express');
const app=express();
const puerto = 3200;
const cors = require('cors'); //paquete por si el front tira error por consumir un dominio desde otra fuente como puede ser react

app.use(cors());

app.use(express.json());

require ('./config/database');


app.use('',require('./routes/routes'))

app.listen(puerto,()=>{
    console.log('Conectado por puerto ' + puerto)
});







