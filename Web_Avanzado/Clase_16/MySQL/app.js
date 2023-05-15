const express= require('express');
const server = express();
const port = 3200;
const cors = require('cors');
const router=require('./routes/routes') //trae el ruteo con los endpoints



server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended:true})); //se utiliza para formularios.
server.use('', router);

require('./config/dataBase')//trae la conexión a la DB

server.listen(port,()=>{
    console.log("Conexión exitosa a puerto " + port);
})

