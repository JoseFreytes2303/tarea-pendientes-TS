

type Tarea = {
    tarea: string
    borrarTareas: () => void
}

export const Tarea = ({tarea,borrarTareas}: Tarea) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTareas}>Borrar</button>

        </div>
    )
}