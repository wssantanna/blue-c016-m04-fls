
let Produto = {
    id: 1,
    nome: 'Leite',
    preco: 7
}

console.log('-- Acessando valores a partir da Chave');

console.log('id', Produto['id']);
console.log('nome', Produto['nome']);
console.log('preco', Produto['preco']);

/* 
    Opção 2
    
    console.log(Produto.id);
    console.log(Produto.nome);
    console.log(Produto.preço);
*/

console.log('-- Estrutura de repetição');

for(let Chave in Produto) {
    console.log(Chave, Produto[Chave]);
}