const dbConnection = require('../config/dataBase');
const jwt=require('jsonwebtoken');

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
    
    const img= 'http://localhost:3200/public/' + req.file.filename; //sin el multer, al usar express.json la API no va a poder enviar archivos (formato diferente a .json)
    //con esto se convierte el nombre del archivo en un enlace que luego puede ser utilizado en la etiqueta src=
    console.log(req.file)
    console.log(req.body)
    
    dbConnection.query('INSERT INTO peliculas (titulo,duracion,genero,tickets,imagen) VALUES(?,?,?,?,?)',[titulo,duracion,genero,parseInt(tickets),img],(error,data)=>{ //se utiliza el parse para convertir number por si se envía como string
        if(error){
            res.send(error);
        } else{
            res.status(200).json('Película cargada correctamente')
        }
        
    })

    res.send("Hecho!!")
}

const registrarUsuario=(req,res)=>{
    const {nombreUsuario,password}=req.body;
    const usuarioRegistrado={
        nombre:"admin",
        pass:"Admin123"
        }
    
        if(nombreUsuario===usuarioRegistrado.nombre && password === usuarioRegistrado.pass){
            console.log("Acceso autorizado, generando token")
            jwt.sign({nombreUsuario},"contraseñaSuperSegura",{expiresIn:'30m'},(error,token)=>{
                if(error){
                    res.send(error);
                } else {
                    res.json({token});
                }
            })
        } else {
            console.log("Usuario incorrecto")
        }
}

const verificacionUsuario=(req,res,next)=>{

}



module.exports={infoCompleta,agregarPelicula,registrarUsuario,verificacionUsuario}