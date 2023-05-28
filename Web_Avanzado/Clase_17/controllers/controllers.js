const infoCompleta=(req,res)=>{
    res.send('OK')
}

const agregarPelicula=(req,res)=>{
    //console.log(req.body);
    const img= req.file.path;
    console.log(req.file.path); //sin el multer, al usar express.json la API no va a poder enviar archivos (formato diferente a .json)
    
    dbConnection.query('INSERT INTO peliculas (imagen) VALUES(?)',[img],(error,data)=>{
        if(error){
            res.send(error);
        } else{
            res.status(200).json('Película cargada correctamente')
        }
        
    })
}

module.exports={infoCompleta,agregarPelicula}