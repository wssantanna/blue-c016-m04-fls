
function TodoService(baseUrl) {

    this.GetTasks = async function () {
        const response = await fetch(baseUrl);
        const tasks = await response.json();

        return tasks;
    }

    this.GetTaskById = async function (idTask) {
        const response = await fetch(`${baseUrl}/${idTask}`);
        const currentTask = await response.json();

        return currentTask;
    }

    this.CreateTask = async function (bodyTask) {

        const bodyConfig = {
            method: 'POST',
            body: JSON.stringify(bodyTask),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }

        const response = await fetch(baseUrl, bodyConfig);
        const newTask = await response.json();

        return newTask;
    }

    this.ReplaceTaskById = async function (idTask, newBodyTask) {
        const bodyConfig = {
            method: 'PUT',
            body: JSON.stringify(newBodyTask),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }

        const response = await fetch(`${baseUrl}/${idTask}`, bodyConfig);
        const replacedTask = await response.json();

        return replacedTask;
    }

    this.UpdateTaskById = async function (idTask, newBodyTask) {
        const bodyConfig = {
            method: 'PATCH',
            body: JSON.stringify(newBodyTask),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }

        const response = await fetch(`${baseUrl}/${idTask}`, bodyConfig);
        const updatedTask = await response.json();

        return updatedTask;
    }

    this.DeleteTaskById = async function (idTask) {
        const bodyConfig = {
            method: 'DELETE'
        }

        const response = await fetch(`${baseUrl}/${idTask}`, bodyConfig);

        // response.ok retorna true/false
        return response.ok;
    }
}

const todoService = new TodoService("https://jsonplaceholder.typicode.com/todos/");

export default todoService;