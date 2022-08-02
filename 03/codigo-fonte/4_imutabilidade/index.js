
const Frutas = ["banana", "pêra", "maçã", "mamão"];

Frutas.push('morango');

console.log(
    '-- Váriavel modificada', 
    Frutas
);

const NovaSacolaFrutas = [...Frutas, 'côco'];

console.log(
    '-- Nova variável definida a partir do valor anterior', 
    NovaSacolaFrutas
);