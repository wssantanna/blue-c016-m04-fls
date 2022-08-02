
function Item() {
    return (
        <div class="alert alert-success" role="alert">
            <h2 class="h6 m-0">There are no tasks! 🙌🎉</h2>
        </div>
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
                        <Item />
                    </ul>
                </section>
            </div>
        </div>
    );
}