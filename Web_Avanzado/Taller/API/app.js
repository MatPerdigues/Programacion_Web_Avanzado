const express = require('express');
const app = express();
const puerto=3200;
const cors= require('cors');
const routes = require('./routes/routesPeliculas')

require('./config/dataBase');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('',routes)



app.listen(puerto, ()=>{
    console.log('Conectado a puerto ' + puerto);
})
