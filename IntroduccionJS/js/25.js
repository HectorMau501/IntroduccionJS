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

//Metodos exclusivos de arreglos

/* En que casos bas a utilizar forEach y en que casos map
forEach Cuando quieras iterar sobre un arreglo y mostrarlos en pantalla y simplemente en la consola
map si quieres crear un nuevo arreglo el map */


//For each no escribes una condicion para el forEach
// carrito.forEach(function(producto){
//     console.log(producto.nombre);
// })

//arrow funcion
// carrito.forEach(producto => {
//     console.log(producto.nombre);
// })

carrito.forEach(producto => console.log(producto));

//map
// carrito.map(producto => {console.log(producto.nombre); });

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);