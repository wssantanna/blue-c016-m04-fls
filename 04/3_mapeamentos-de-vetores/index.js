
const valores = [5,12,8,130,44];

function maiorQueDez(numero) {
    return numero > 10;
}

function dobrarValores(numero) {
    return numero * 2;
}

// let dobrarValores = valores.map(numero => numero * 2);

console.log('find()', valores.find(maiorQueDez) );
console.log('filter()', valores.filter(maiorQueDez) );
console.log('map()', valores.map(dobrarValores));
console.log(`- valores originais ${valores}`);