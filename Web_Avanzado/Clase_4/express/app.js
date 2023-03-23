const express = require("express");
const server = express(); //esto es necesario para poder llamar a las funciones de express

/****************TIPO DE PETICIONES*******************/

//Metodos GET y POST / GET pide traer algo y POST pide enviar algo como por ejemplo los formularios

server.get("/home", (req, res)=>{ //el enpoint que toma define la peticion es localhost:3000/home
    res.send("devolución del get del /home") //El parametro get define lo que se esta solicitando y res la respuesta a eso. El metodo send es uno de muchos metodos posibles para send
    console.log("Petición solicitada");
}); //petición de tipo GET. El front hace la petición a través de determinado puerto y la API, que va a estar escuchando ese puerto brinda la información 

server.get("/productos", (req,res)=>{
    res.send(unProducto);
})

server.listen(3000,(req,res)=>{
    console.log("estamos corriendo el servidor en el puerto 3000");
}); //con esto se ordena a la API que escuche las peticiones que vienen por ese puerto y las funciones que debe ejecutar.

//POSTMAN (descargar de web permite visualizar la información que estamos mandando sin necesidad de diseñar un formulario y nos devuelva la visualizacion de la información enviada)






