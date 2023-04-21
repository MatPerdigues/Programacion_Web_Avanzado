import{useEffect,useState} from 'react';
import Student from "../Student/Student";

export default function Students() {
    let [datos,setDatos]=useState([]);


    const traerInfo=async()=>{
        // metodo que es una promesa , le pediamos que haga "algo" -> una peticion , y que segun la respuesta : si lo pudo hacer o no, realizar distintas acciones
        //por defecto -> peticion GET ,pero podemos cambiar su configuracion para utilizar las otras peticiones (POST,DELETE,etc..)
        await fetch("http://localhost:3200/getStudents")
                .then((res)=>res.json())
                .then((data)=>setDatos(data))
                .catch((err)=> console.log(err))
      
    }

    useEffect(()=>{
        traerInfo()

        setTimeout(()=>{console.log(datos)},5000)//ejecutar una funcion luego de un cierto tiempo(seg)
        // let alumnos=[....]
        // setDatos(alumnos)
    },[])


    return(
        <section className= 'row card text-white bg-secondary m-3 align-items-center w-50'>

            {datos.map((dato)=>{
               return <Student key={datos.indexOf(dato)} info={dato} />
            })}
        </section>
    )
}