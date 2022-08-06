

async function requererTodos() {
    /*
        O que o servidor retorna?

        - Se conseguiu se comunicar com servidor;
        - Qual foi o status da requisição;
        - Caso a requisição estiver Ok, uma nova promessa com corpo.
    */
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    /*
        O que o servidor retorna na resposta da segunda promessa?

        - O corpo da requisição.
    */
    let produtos = await resposta.json();

    return produtos;
}

export { requererTodos }