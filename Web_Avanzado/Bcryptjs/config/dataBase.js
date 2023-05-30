const mysql=require('mysql2');


const dataBaseInfo = { //esta info se obtiene en la pagina phpmyadmin
    host:'localhost',
    user:'root',
    database: 'taller',
};

const dbConnection = mysql.createConnection(dataBaseInfo);

dbConnection.connect((error)=>{
    if(error){
        console.log(error)
    } else {
        console.log('Conexión con DB MySQL exitosa')
    }
});

module.exports=dbConnection;