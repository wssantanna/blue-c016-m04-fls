
let condicao = true;
let condicaoDeNegacao = !condicao;

console.log(condicao);
console.log(condicaoDeNegacao);

// 
console.log("-- Condicionais if, else");

function valido() {
    if(condicao) {
        return "Sim";
    }
    else {
        return "Não";
    }
}

// let valido = () => condicao ? "Sim": "Não";

console.log("-- Condicionais if, else (Negação)");

function NaoValido() {
    if(condicaoDeNegacao) {
        return "Não";
    }
    else {
        return "Sim";
    }
}

// let naoValido = () => condicaoDeNegacao ? "Não": "Sim";

console.log("-- Condicionais if, if else, else");

if(condicao) {
    console.log("sim");
}
else if(condicaoDeNegacao) {
    console.log("não");
}
else {
    console.log("talvez");
}

// let concatenacaoCondicao = () => condicao ? "sim": condicaoDeNegacao ? "Não": "talvez";

switch(condicao) {
    case true:
        console.log("sim");
        break;
    case false:
        console.log("não");
        break;
    default:
        console.log("talvez");
        break;
}

//

function nomesIngles(corEmPortugues) {
    const cores = {
        vermelho: 'red',
        verde: 'green',
        azul: 'blue',
        amarelo: 'yellow',
        preto: 'black'
    }

    return cores[corEmPortugues];
}

console.log( nomesIngles('vermelho') );