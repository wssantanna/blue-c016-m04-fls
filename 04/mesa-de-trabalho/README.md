# Implementação do Todo List

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm install`

Inicializa o download de todas as dependências necessárias para aplicativo funcionar.

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.\
Você também pode ver erros de lint no console.


## Instruções

Com base no código-fonte implemente a listagem de todas as tarefas.


### Acessando dados de um vetor

- [ ] No componente `Lista` encontrará um lista de tarefas, no seguinte formato:

    ```js
    [
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
    ]
    ```
### Propriedades

- [ ] No componente `Lista`, crie uma estrutura de repetição para renderizar um componente `Item` para cada tarefa.

- [ ] No componente `Lista`, envie como **parametro**, cada tarefa para cada componente `Item`. 