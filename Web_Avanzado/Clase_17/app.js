const express=require('express');
const server=express();
const puerto=3200;
const cors=require('cors')

const routes=require('./routes/routes');

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use('',routes);

//para fines prácticos se definen los routes y los controllers en este mismo archivo



server.listen(puerto,()=>{
    console.log(`Conectado a puerto ${puerto}`)
})