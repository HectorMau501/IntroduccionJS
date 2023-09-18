//130 For loops

//For loops

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

//const numero;

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(`El indice actual ${i} es PAR`);
//     }   else{
//         console.log(`El indice actual ${i} es IMPAR`)
//     } 
// }

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Television 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 700},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 300},
];

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre,carrito[i].precio);
}

/*La diferencia entre el while y el do-while
es que el while evalua la condicion, si es verdadera entoncences lo va a imprimir
y el do-while primero imprime y luego evalua
*/

//While loops
//let i  = 0;

/*while(i < carrito.length){//Codicion

    console.log(carrito[i].nombre);
    // if(i % 2 === 0){
    //     console.log(`El numero ${i} es par`);
    // }else{
    //     console.log(`El numero no ${i} es par`)
    // }
    
    i++;//Incrementp
}*/

//do while loops
let i = 100;

do{
    console.log(i);


    i++;
}while(i < 10);