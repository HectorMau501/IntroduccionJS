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
meses.forEach(function(mes){
if(mes == "Abril"){
    console.log("Si existe");
}
});

//Includes es para arreglos planos como el de meses
let resultado = meses.includes("Mayo");

//Some es ideal para arreglos de objetos 
resultado = carrito.some(function(producto){
    return producto.nombre === "Teclado"
});

//Reduce el 0 es donde inicia
resultado =  carrito.reduce(function(total,producto){
    return  total + producto.precio
}, 0 );

//Filter se puede traer los que son mayores menores iguales o no iguales
resultado = carrito.filter(function(producto){
    return producto.precio > 400;
});

console.log(resultado);