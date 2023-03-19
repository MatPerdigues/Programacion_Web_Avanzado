"use strict";
class Persona1 {
    constructor(nombre, apellido, edad, usuario, categoria) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad,
            this.usuario = usuario,
            this.categoria = categoria;
    }
}
class Alumno extends Persona1 {
    constructor(idAlumno, nombre, apellido, edad, usuario, categoria) {
        super(nombre, apellido, edad, usuario, categoria);
    }
    verCampus() {
        console.log("Alumno ingresó al campus");
    }
    dejarComentario() {
        console.log("Alumno " + this.nombre + " " + this.apellido + " dejó comentario");
    }
}
class Docente extends Persona1 {
    constructor(idDocente, nombre, apellido, edad, usuario, categoria) {
        super(nombre, apellido, edad, usuario, categoria);
        this.idDocente = idDocente;
    }
    crearMaterialCampus() {
        console.log("El docente ha creado material");
    }
}
class Administracion extends Persona1 {
    constructor(nivelDeAdministrador, nombre, apellido, edad, usuario, categoria) {
        super(nombre, apellido, edad, usuario, categoria);
    }
    crearMaterialCampus() {
        console.log("Se han emitido los certificados");
    }
}
const ruben = new Alumno(654, "Ruben", "Lopez", 43, "rlopez", "novato");
console.log(ruben);
ruben.dejarComentario();
const laura = new Docente(1, "Laura", "Villa", 56, "lvilla", "docente");
console.log(laura);
laura.crearMaterialCampus();
