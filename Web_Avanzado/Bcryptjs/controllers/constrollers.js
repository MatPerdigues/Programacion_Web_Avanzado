const dbConnection = require('../config/dataBase');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const registrarAdmin=async(req,res)=>{
    const {userFront,passFront}=req.body;
    const passEncrip=await bcrypt.hash(passFront,8);
    dbConnection.query('INSERT INTO administradores (nombreUsuario,password) VALUES(?,?)',[userFront,passEncrip],(error,data)=>{
        if(error){
            res.send("Error del servidor, vuelva a intentarlo");
        }else{
            res.send(`Usuario ${userFront} cargado correctamente`);
        } 
    })
}


const login=(req,res)=>{
    const{userFront,passFront}=req.body

    dbConnection.query("SELECT * FROM administradores WHERE nombreUsuario=(?)",[userFront],async(error,data)=>{
        if(error){
            res.send("Usuario no encontrado")
        }else{
            const userData=data[0];

            const passOk=await bcrypt.compare(passFront,userData.password)

            if(passOk){

                res.json({Mensaje:`Usuario ${userFront} logeado!!`
                   }
            ); 

            }else{
                res.json({contraseñaFront:passFront,
                        contraseñaDB:userData.password,
                        passOk:passOk})
            }

            
        }
    })
}

module.exports={registrarAdmin,login};