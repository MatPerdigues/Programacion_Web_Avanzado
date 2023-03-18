let nombre = "Matias" //typescript permite establecer tipo de datos a las variables

nombre = "Juan";

let num:any = 15659;

num = "Gastón"; // el tipo any permite utilizar cualquier tipo de dato. No se suele utilizarlo ya que pierde sentido el objetivo de TSC que es tipear las variables.

function saludo (nombrePersona:string){
    console.log("Hola " + nombrePersona)
}

saludo("45684");

const suma = (num1:number, num2:number, mensaje?:String)=>{ // el simbolo ? marca un parametro opcional
    let suma:number = num1 + num2;
    console.log("La suma es " + suma);
    console.log(mensaje)
}

suma(25,32);

let arrayNumeros:number[] = [4,6,215,215];
let arrayNumeros1:Array<number> = [4,6,215,215]; //formas de tipear un array con TSC
let arrayNumeros2:(number|string)[] = [4,6,215,215];





