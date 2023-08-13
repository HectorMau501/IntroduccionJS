const producto = {
    nombreProducto :  "Monitor 20 Pulgadas" , //Esto es propiedad o llave del objeto 
    precio : 300,
    disponible : true
}

//Nombre producto no es una variable es una propiedad
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


/*Destructuring
extrae el valor y crea la variable en un solo par */
const {precio , disponible} = producto;

console.log(precio);
console.log(disponible);