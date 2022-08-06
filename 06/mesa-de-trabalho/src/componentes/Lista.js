
function Item({ tarefa }) {

    const { id, descricao, concluido } = tarefa;

    return (
        <li class="list-group-item py-3">
            <input 
                class="form-check-input me-3" 
                type="checkbox" 
                id={`Checkbox-${id}`} 
            />
            <label 
                class="form-check-label" 
                for={`Checkbox-${id}`}>
                    {descricao}
            </label>
        </li>
    );
}

const Tarefas = [
    {
        id: 1, 
        descricao: "Revisar operadores ternário, negação e coalescência nula",
        concluido: false
    },
    {
        id: 2, 
        descricao: "Revisar condicionais if, else if, else; switch, case, break",
        concluido: false
    },
    {
        id: 3, 
        descricao: "Revisar maneiras de listar, procurar e filtrar valores em um vetor",
        concluido: false
    },
];

export default function Lista() {
    return (
        <div class="row g-3">
            <div class="col">
                <section class="py-5">
                    <h2 class="h5 mb-4">My tasks</h2>
                    <ul class="list-group" data-todo-target="list">
                        {
                            Tarefas.map(tarefa => <Item tarefa={tarefa} />)
                        }
                    </ul>
                </section>
            </div>
        </div>
    );
}