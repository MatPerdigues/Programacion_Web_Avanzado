const express = require ("express");
const app = express();

app.use(express.json()); //se le indica a express que deberá interpretar información en formato json incluida en el body del request del POST



//app.get(endpoint, callback (info peticion, respuesta))
app.get("/home",(req,res)=>{
    res.send("Se ingresó a la home");
});

app.get("/personajes", (req, res)=>{
    res.send("lista de personajes")
})

app.get("/", (req, res)=>{
    res.send("Información inicial solicitada")
})

app.get("/blabla", (req, res)=>{
    res.send({item:"bla"});
})


app.post("/usuario", (req, res)=>{
    console.log(req.body);
    let nuevoUsuario=req.body;
    res.send('recibimos info del usuario: ' + nuevoUsuario.usuario);
});

//debido a que a través de la web solo podemos hacer peticiones GET, para hacer peticiones de tipo POST sin necesidad de armar un front (formulario) podemos utilizar el programa postman.

app.listen(3200, ()=>{
    console.log("Corriendo en el puerto 3200");
})

