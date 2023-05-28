const express=require('express');
const server=express();
const puerto=3200;
const cors=require('cors')
require('./config/dataBase')

const routes=require('./routes/routes');

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use('',routes);
server.use('/public', express.static('./imagenes')) //esto permite acceder a la carpeta 'imagenes' desde el endpoint /public.

//



server.listen(puerto,()=>{
    console.log(`Conectado a puerto ${puerto}`)
})