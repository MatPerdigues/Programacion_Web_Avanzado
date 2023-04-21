export default function AddStudents (){
    return (
        <form className="row card text-white bg-secondary m-3 align-items-center w-50" action="http://localhost:3200/addStudent" method="POST">

                <label className="col-sm-2 col-form-label mb-2 w100" formhtml="nombre">Nombre de Alumno</label>
                <input className="col-sm-10 form-control mb-3" type="text" name="nombre" id="nombre"></input>
        
            <input type="submit" value="Agregar" className="btn btn-primary w-25"></input> 






        </form> 

    )
}