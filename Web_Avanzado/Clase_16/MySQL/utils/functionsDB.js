const dbConnection=require("../config/dataBase");



const cargaDePlato=(plato,costo,cantidad,cat)=>{
    dbConnection.query('INSERT INTO platos(nombrePlato,precio,stock,categoria) VALUES(?,?,?,?)', [plato,costo,cantidad,cat], (err,data)=>{
            if(err){
                return err;
            }else{
                console.log(data)
                return "OK";
                
            }
        }
    )
};

const traerTodosLosPlatos=(res)=>{
   dbConnection.query('SELECT * FROM platos',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send (data)
        }
    })
   
}

module.exports={cargaDePlato,traerTodosLosPlatos}