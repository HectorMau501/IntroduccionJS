//Arrow funtion

//Te ayudan a escribir el mismo codigo, pero mas resumido a otros

//Arrow funtion
const sumar2 = (n1 , n2) => {
    console.log(n1 + n2);
}
//== const sumar2 = (n1 , n2) => console.log(n1 + n2);

sumar2(10,5);

//sintaxis basica del arrow funtion
// const aprendiendo = () => {

// }

const aprendiendo = tegnologia =>  console.log(`Aprendiendo ${tegnologia}`);


aprendiendo('JavaScript');




//Array Methos

const meses = ["Enero","Febrero","Marzo","Abril","Mayo"];

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

//forEach para imprimir todo
meses.forEach((mes) =>{
if(mes == "Abril"){
    console.log("Si existe");
}
});

let resultado;

//Some es ideal para arreglos de objetos 
resultado = carrito.some( producto =>  producto.nombre === 'Teclado');

//Reduce el 0 es donde inicia
resultado =  carrito.reduce( (total,producto) =>   total + producto.precio , 0 );

//Filter se puede traer los que son mayores menores iguales o no iguales
resultado = carrito.filter( producto =>  producto.precio > 400 );


resultado = carrito.filter(  producto => producto.nombre !== 'Celular');


console.log(resultado);


