//Funciones que retornan algun valor

// function sumar(n1 , n2){
//     return n1 + n2;
// }

// const resultado = sumar(10 , 20);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function impuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);

console.log(total);

const totalPagar = impuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalPagar}`);
