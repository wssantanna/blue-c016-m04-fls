
/*

    Implementei um serviço para 
    comunicação com servidor. 
*/
async function requererTodos() {
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let publicacoes = await resposta.json();

    return publicacoes;
}

async function requererUmPelaId(id) {
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let publicacao = await resposta.json();

    return publicacao;
}

async function requererCriarUm(item) {
    let cabecalho = {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }

    let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts`, cabecalho)
    let novaPublicacao = await resposta.json();

    return novaPublicacao;
}

async function requererSubstituirUmPelaId(id, novoItem) {
    let cabecalho = {
        method: 'PUT',
        body: JSON.stringify(novoItem),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }

    let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, cabecalho)
    let novaPublicacao = await resposta.json();

    return novaPublicacao;
}

async function requererAtualizarUmPelaId(id, novoItem) {
    let cabecalho = {
        method: 'PATCH',
        body: JSON.stringify(novoItem),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }

    let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, cabecalho)
    let novaPublicacao = await resposta.json();

    return novaPublicacao;
}

async function requererDeletarUmPelaId(id) {
    let cabecalho = {
        method: 'DELETE',
    }

    let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, cabecalho)
    let status = await resposta.status;

    return status;
}

/*

*/
export { 
    requererTodos, 
    requererUmPelaId, 
    requererCriarUm,
    requererSubstituirUmPelaId,
    requererAtualizarUmPelaId,
    requererDeletarUmPelaId
}