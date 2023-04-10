const express = require("express");
const app=express();
const puerto=3200;
const rutas = require("./routes/rutas");



app.use(express.json());

app.use("/", rutas);




app.listen(puerto,()=>{
    console.log("Contectado al puerto " + puerto)
})