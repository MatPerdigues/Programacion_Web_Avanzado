//instalar mysql2 => npm instal mysql2 cuando nos conectamos a DB mysql

const mysql=require('mysql2');

const dbInfo = {
    host:'localhost',
    user:'root',
    database: 'taller'
}

const dbConnection = mysql.createConnection(dbInfo);

dbConnection.connect((error)=>{
    if(error){
        console.log(error)
    } else(
        console.log('Conectado a Base de Datos SQL')
    )
    
});

module.exports=dbConnection;