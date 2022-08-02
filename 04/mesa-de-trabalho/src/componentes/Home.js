import Lista from './Lista';

export default function Home() {
    return (
        <div class="container">
            <div class="row">
                <article class="pt-5 pb-2">
                    <h1 class="h1">Todo List</h1>
                </article>
            </div>
            <div class="row g-3">
                <div class="col">
                    <label 
                        class="visually-hidden" 
                        for="AddTaskInput"
                    >
                        Add Task
                    </label>
                    <input 
                        class="form-control form-control-lg" 
                        id="AddTaskInput"
                        type="text" 
                        placeholder="Add Task..." 
                        aria-label="Add Task..."
                    />
                </div>
                <div class="col-auto">
                    <button 
                        class="btn btn-lg btn-primary"
                        data-todo-target="add"
                    >
                        +
                    </button>
                </div>
            </div>

            <Lista />

        </div>
    );
}