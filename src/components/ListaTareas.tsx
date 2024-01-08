import { Tarea } from "./Tarea"


type ListaTarea = {
    listaTareas: string[]
    borrarTareas: (index: number) => void
}

 export const ListaTareas = ({listaTareas, borrarTareas}: ListaTarea) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea,index)=> (
                <Tarea key={index}tarea={tarea}borrarTareas={()=> borrarTareas(index)}></Tarea>
            )
            )}
        </div>
    )
}