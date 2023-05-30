const dbConnection = require('../config/dataBase');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const bcrypt=require('bcrypt');
const PASS_SEGURA=process.env.PASS_SEGURA

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




const login = (req,res)=>{
    const{user,password}=req.body;

    dbConnection.query("SELECT * FROM administradores WHERE nombreUsuario=?",[user],async(error,data)=>{
        if(error){
            res.send("Error en el servidor " + error)
        }else{
            if(data.length==0){
                res.send("Usuario no registrado");
            }else{

            
            console.log("Usuario encontrado")
            let info=data[0];
            console.log(info);
            const passOk=await bcrypt.compare(password,info.password)
            console.log(info.password);
            console.log(password)
            console.log(passOk); 

            if(passOk){
                console.log("Usuario correcto, generando Token");
                jwt.sign({user},PASS_SEGURA,{expiresIn:'30m'},(error,token)=>{
                    if(error){
                        res.send(error)
                    }else{
                        res.json({
                            mensaje:"usuario logeado",
                            tokenLogIn:token
                        })
                    }
                })
            }else{
                res.json({mensaje:"Password incorrecta"})
            }
        }
        }
    })
}

 






const verificacionUsuario=(req,res,next)=>{

    const authToken=req.headers.authorization;
    const token=authToken.split(" ").pop(); //debido a que al mostrar por consola el token se entrega con "bearer" al principio, se utiliza el split y el pop para quedarnos solo con la última parte (token)
    //console.log(authToken);
    
    next(); //VER SI ESTO ES LO QUE HACE EL PROCESO CONTINUE A PESAR DE EXPIRACION TOKEN
    jwt.verify(token,PASS_SEGURA,(error,data)=>{ //process.env.PASS_SEGURA
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

const registrarAdmin=async (req,res)=>{
    const {user,password}=req.body;

    const passEncriptada= await bcrypt.hash(password,10); //con esto estoy encriptano la variable password con un nivel 10 y como resultado da la variable passEncriptada. Se trata de una funcion asincrona para que la contraseña sea encriptada antes de su registro en la DB

    dbConnection.query('INSERT INTO administradores (nombreUsuario,password) VALUES(?,?)',[user,passEncriptada],(error,data)=>{
        if(error){
            res.send(error);
        }else{
            res.send("Usuario registrado!!")
        }
    }
    )
}



module.exports={infoCompleta,agregarPelicula,login,verificacionUsuario,registrarAdmin}