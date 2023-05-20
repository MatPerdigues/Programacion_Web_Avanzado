const express=require('express');
const server=express();
const puerto=3200;
const cors=require('cors')
const upload=require('./multer/cargaImagen') 

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended:true}));

//para fines prácticos se definen los routes y los controllers en este mismo archivo

server.get('/',(req,res)=>{
    res.send('OK')
});

server.post("/cargarImagen",upload.single('imagen'),(req,res)=>{
    //console.log(req.body);
    console.log(req.file); //sin el multer, al usar express.json la API no va a poder enviar archivos (formato diferente a .json)
    res.send('Foto cargada')
});

server.listen(puerto,()=>{
    console.log(`Conectado a puerto ${puerto}`)
})