"use strict";
class Persona {
    constructor(nombrePersona, apellidoPersona, edadPersona) {
        this.nombre = nombrePersona;
        this.apellido = apellidoPersona;
        this.edad = edadPersona;
        this.nacionalidad = "Argentina"; //Atributo fijo aunque puede modificarse en otras instancias
    }
    leer() {
        console.log("puede leer");
    }
    escribir() {
        console.log("puede escribir");
    }
    hablar() {
        console.log("puede hablar");
    }
}
const victoria = new Persona("Victoria", "López", 29);
victoria.escribir();
console.log(victoria);
// **********HERENCIA********************//
class Recepcion extends Persona {
    constructor(usuario, nombrePersona, apellidoPersona, edadPersona) {
        super(nombrePersona, apellidoPersona, edadPersona);
        this.usuario = usuario;
    }
    registrarPaciente(nombrePersona, nombreMascota) {
        console.log(nombrePersona + " ha atendido a " + nombreMascota);
    }
}
const ana = new Recepcion("arodriguez", "Ana", "Rodriguez", 39);
console.log(ana);
ana.registrarPaciente("AnaLo", "Firu");
/*const victoria = new Persona;

victoria.nombre = "Victoria";
victoria.apellido = "Lopez";
victoria.edad = 29;

console.log(victoria);
victoria.hablar();

const ignacio = new Persona;
ignacio.nombre="Ignacio";
ignacio.apellido="Gomez";
ignacio.edad = 38;
console.log(ignacio); */
