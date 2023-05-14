const express=require ('express');
const app=express();
const puerto = 3200;

app.use(express.json());

require ('./config/database');


app.use('',require('./routes/routes'))

app.listen(puerto,()=>{
    console.log('Conectado por puerto ' + puerto)
});







