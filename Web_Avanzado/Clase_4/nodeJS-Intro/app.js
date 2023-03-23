let funcionesArch = require("./ejemploNode") //permite traer modelos a nuestro archivo. Los modulos son grupos de funciones.
let validador = require("validator"); //validator es el paquete descargado de Node para lo cual previamente hay el package.json con el comando node install -y.

console.log(funcionesArch.sumar(50,20));

funcionesArch.SALUDO("Matías");

console.log(validador.isCreditCard("45"));


//nodemon es un paquete que detecta cambios en el archivo y reproduce automáticamente en el archivo. Para instalarlo de manera global se usa el comando npm i -g nodemon (local npm i nodemon). Para utlizarlo en el proyecto luego de la instalación global se utiliza el comando npm i -D nodemon. Para activar la consolo se utliza el comando nodemon app.js(app.js es el nombre del archivo). Se detiene la ejecución con ctr c.

