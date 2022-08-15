import { useEffect, useState } from "react";

import TaskController from "../controllers/TaskController";

import Item from "./Item";

function List() {

    const { Read, Create } = TaskController;

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(null);

    useEffect(() => {
        Read().then(tasks => setTasks(tasks))
    }, []);

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Adicione uma tarefa..."
                    onChange={(event) => setNewTask({ title: event.target.value, body: event.target.value, userId: 1 })}
                />
                <button onClick={() => Create(newTask)}>+</button>
            </div>
            <ul>
                {tasks.map(task => <Item key={task.id} task={task} />)}
            </ul>
        </>
    )
}

export default function Todo() {
    return (
        <>
            <h1>App TodoList</h1>
            <List />
        </>
    );
}