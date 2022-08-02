

const Frutas = ["banana", "pêra", "maçã", "mamão"];

console.log('-- Acessando valores a partir do Indice');

console.log(0, Frutas[0]);
console.log(1, Frutas[1]);
console.log(2, Frutas[2]);
console.log(3, Frutas[3]);

console.log('-- Estrutura de repetição');

Frutas.forEach((item, indice) => console.log(indice, item));