
const {allStudents,addOneStudent} = require('./controllers/studentsControllers');
const express = require ('express');
const corse = require('cors');
const app = express();
const port = 3200

app.use(express.json());
app.use(corse());
app.use(express.urlencoded({extended:true})); //transforma la info del formulario para que llegue como objeto

app.get('/getStudents', allStudents)


app.post('/addStudents', addOneStudent)

app.listen( port,()=>{
    console.log ("Conectado a puerto " + port);
})

//instalar npm i corse en la API para habilitar acceso externo