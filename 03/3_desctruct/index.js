const Frutas = ["banana", "pêra", "maçã", "mamão"];

console.log('-- Armazenando informações em variáveis');

const itemA = Frutas[0];
const itemB = Frutas[1];
const itemC = Frutas[2];
const itemD = Frutas[3];

console.log(itemA, itemB, itemC, itemD);

console.log('-- Destruction da Array');

const { item1, item2, item3, item4 } = Frutas;

console.log(item1, item2, item3, item4);