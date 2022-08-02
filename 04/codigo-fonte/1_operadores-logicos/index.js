

// 
console.log("-- Operadores lógicos");
console.log(5 < 5);
console.log(5 > 5);
console.log(5 <= 5);
console.log(5 >= 5);
console.log(5 == "5"); // Apenas o valor é igual? true
console.log(5 != "5"); // Apenas o valor é diferente? false
console.log(5 === "5"); // Valor é tipo é igual? false
console.log(5 !== "5"); // Valor e ou tipo são difentes? true

// 
console.log("-- Operador de coalescência nula");
let valor = 0;
console.log(valor || "vazio");
console.log(valor ?? "vazio");

// 
console.log("-- Operador de negação");
let condicao = true;
let condicaoDeNegacao = !condicao;

console.log(condicao);
console.log(condicaoDeNegacao);

// 
console.log("-- Operador ternário");

console.log( condicao ? "Sim": "Não" ); 

console.log( condicaoDeNegacao ? "Sim": "Não" ); 

let valido = () => condicao ? "Sim": "Não";

function valido() {
    return condicao ? "Sim": "Não";
}