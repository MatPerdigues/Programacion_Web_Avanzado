const dbConnection = require('../config/dataBase');
const jwt=require('jsonwebtoken');
require('dotenv').config();

const infoCompleta=(req,res)=>{

    dbConnection.query('SELECT * FROM peliculas',(error,data)=>{
        if(error){
            res.send(error);
        }else{
            res.send(data);
        }
    })
    
}

const agregarPelicula=(req,res)=>{

    const{titulo,duracion,genero,tickets}=req.body
    //console.log(req.body);
    const usuario=req.auth;
    console.log(req.auth);
    
    const img= 'http://localhost:3200/public/' + req.file.filename; //sin el multer, al usar express.json la API no va a poder enviar archivos (formato diferente a .json)
    //con esto se convierte el nombre del archivo en un enlace que luego puede ser utilizado en la etiqueta src=
    console.log(req.file)
    console.log(req.body)
    
    dbConnection.query('INSERT INTO peliculas (titulo,duracion,genero,tickets,imagen) VALUES(?,?,?,?,?)',[titulo,duracion,genero,parseInt(tickets),img],(error,data)=>{ //se utiliza el parse para convertir number por si se envía como string
        if(error){
            res.send(error);
        } else{
            res.status(200).json(`Película cargada correctamente por el usuario ${usuario}`)
        }
    
        res.send("Hecho!!")
    })

    
}

const login=(req,res)=>{
    const {nombreUsuario,password}=req.body;

    dbConnection.query("SELECT * FROM administradores WHERE nombreUsuario=?",[nombreUsuario],(error,data)=>{
        if(error){
            res.send("Usuario NO registrado")
        }else{
            let info = data[0];
        }
    })
/*const usuarioRegistrado={
        nombre:"admin",
        pass:"Admin123"
        }
    */    
        if(nombreUsuario===usuarioRegistrado.nombre && password === usuarioRegistrado.pass){
            console.log("Acceso autorizado, generando token")
            jwt.sign({nombreUsuario},process.env.PASS_SEGURA,{expiresIn:'30m'},(error,token)=>{
                if(error){
                    res.send(error);
                } else {
                    res.json({
                        mensaje:"Usuario logeado",
                        tokenLogIn:token});
                }
            })
        } else {
            console.log("Usuario incorrecto")
        }
}

const verificacionUsuario=(req,res,next)=>{

    const authToken=req.headers.authorization;
    const token=authToken.split(" ").pop(); //debido a que al mostrar por consola el token se entrega con "bearer" al principio, se utiliza el split y el pop para quedarnos solo con la última parte (token)
    //console.log(authToken);
    
    next();
    jwt.verify(token,process.env.PASS_SEGURA,(error,data)=>{
        if(error){
            if(error.name=="TokenExpiredError"){return res.send("Expiro el tiempo, por favor volver a logearse")}
            res.send(error);
        }else{
            console.log(data);
            req.auth=data.nombreUsuario;
            next();
        }
    })



}

module.exports={infoCompleta,agregarPelicula,login,verificacionUsuario}