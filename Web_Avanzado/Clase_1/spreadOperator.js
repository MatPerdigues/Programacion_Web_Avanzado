//permite copia de datos
//las operaciones con el nombre del array generan errores. El spread utiliza cada valor del arreglo de manera independiente 

let numeros = [4,56,79,32];

let nombres = ["Juan", "Maty", "Caro"];

const sumarNumeros = (num1,num2,num3,num4)=>{
    return num1+num2+num3+num4;
}

let [Juan,...resto] = nombres;

console.log(...nombres);