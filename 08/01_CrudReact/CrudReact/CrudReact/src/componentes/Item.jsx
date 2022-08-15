import TaskController from "../controllers/TaskController";

export default function Item({ task }) {

    const { Edit, Delete } = TaskController;

    return (
        <li>
            <input
                type="text"
                value={task.title}
            />
            <button onClick={() => Delete(task.id).then(status => status)}>Deletar</button>
            <button onClick={() => Edit(task.id, task).then(editedTask => editedTask)}>Editar</button>
        </li>
    )
}