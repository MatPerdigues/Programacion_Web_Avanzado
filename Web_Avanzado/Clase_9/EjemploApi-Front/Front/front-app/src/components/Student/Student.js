
export default function Student({info}) {
    return(
        <div className="d-flex align-items-center justify-content-center">
            <p className="col-5">{info.nombre}</p>
            <div className="col-6 d-flex my-3">
                <button className="btn btn-secondary me-2">Mas info..</button>
                <button className="btn btn-primary">Eliminar Alumno</button>            
            </div>

        </div>
    )
}