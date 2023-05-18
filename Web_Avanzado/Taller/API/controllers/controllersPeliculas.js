const dbConnection=require('../config/dataBase') //necesito la conecion a la DB para poder darle indiciones con el CRUD

const todasLasPelis=(req,res)=>{
    dbConnection.query('SELECT * FROM peliculas',(error,data)=>{
        if(error){
            res.send('No se pudo obtener la información ' + error);
        }else{
            res.send(data);
        }
    })
};


const traerUnaPeli=(req,res)=>{
    const tituloPeli=req.params.nombrePeli; //esto siginifica que toma el parámetro definido de la request (definido en routes)
    dbConnection.query (`SELECT * FROM peliculas where titulo= ?`,[tituloPeli], (error,data)=>{ //el nuevo parametro [tituloPeli] reemplaza al signo ?
        if(error){
            res.send('No se pudo obtener la información ' + error);
        }else{
            res.send(data);
        }
    }
    
    
    );


};
const agregarPeli=(req,res)=>{
    const{titulo,duracion,genero,tickets} = req.body; //toma la info que se envía por el body de la request a diferencia del .params que toma la info del parámtro del endpoint

    dbConnection.query('INSERT INTO peliculas (titulo,duracion,genero,tickets) VALUES (?,?,?,?)',[titulo,duracion,genero,tickets],(error,data)=>{
        if(error){
            res.send('No se pudo agregar la información ' + error);
        }else{
            res.redirect('/infoPelis'); // activa un nuevo endpoint
        }

    })
};


const borrarPeli=(req,res)=>{
    const tituloPeli=req.params.nombrePeli;

    dbConnection.query(`DELETE FROM peliculas WHERE titulo = ?`,[tituloPeli],(error,mensajeOK)=>{
        if(error){
            res.send('No se pudo borrar la información ' + error);
        }else{
            
            res.redirect('/infoPelis'); // activa un nuevo endpoint
        }

    })
};

module.exports={todasLasPelis, traerUnaPeli, agregarPeli, borrarPeli};