import TodoService from '../services/TodoService';

function TaskController() {

    const { GetTasks, CreateTask, ReplaceTaskById, DeleteTaskById } = TodoService;

    this.Create = async function (bodyTask) {

        const newTask = await CreateTask(bodyTask);

        return newTask;
    }

    this.Read = async function () {

        const tasks = await GetTasks();

        return tasks;
    }

    this.Edit = async function (idTask, bodyTask) {

        const replacedTask = await ReplaceTaskById(idTask, bodyTask);

        return replacedTask;
    }

    this.Delete = async function (idTask) {

        const hasDeletedTask = await DeleteTaskById(idTask);

        return hasDeletedTask;
    }
}

const taskController = new TaskController()

export default taskController;