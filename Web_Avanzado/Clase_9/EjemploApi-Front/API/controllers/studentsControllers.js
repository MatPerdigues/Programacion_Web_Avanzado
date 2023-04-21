
const students = [{
    nombre:'Ana Perez'
},{
    nombre:'Juan Gomez'
},{
    nombre: 'Julia Lopez'
},{
    nombre:'Marta Sanchez'
},{
    nombre: 'Lendro Ruiz'
}]



const allStudents = (req, res)=>{

    // la inso se envia en formato json
    let infoJSON=JSON.stringify(students);

    console.log("llamado a get")

    res.send(infoJSON);

};


const addOneStudent = (req, res)=>{

//tomar la info que le llega y guardarla en mi variable "students"

//la info nos llega por medio de la req.body

const {nombre}= req.body; // de toda la info del formulario solo me estoy guardando en la variable nombre el valor del input name "nombre"

console.log(nombre)

students.push({nombre:nombre})

//responder algo ... salio todo ok, redirija a una peticion del front 

res.redirect("http://localhost:3200/")

}; 

module.exports={allStudents,addOneStudent};

