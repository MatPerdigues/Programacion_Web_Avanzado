class Recepcion {  //clase o molde del objeto

    constructor(nombre:String, edad:number, usuario:String){
    
    }

    registrarPaciente (){
        console.log("paciente registrado");
    }

    cobroDeConsulta (){
        console.log("Paciente cobrado");
    }
}

const jose = new Recepcion("José", 35, "jlopez"); //instancia del objeto

const ana = new Recepcion("Ana", 24, "arodriguez");

console.log(jose);