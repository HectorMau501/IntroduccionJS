//Objetos

/*
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;*/

//Objeto->
// va a tener lo mismo que lo anterior pero con las tres variables
const producto = {
    nombreProducto :  "Monitor 20 Pulgadas" , //Esto es propiedad o llave del objeto 
    precio : 300,
    disponible : true
}

// console.log(producto);

// //La sintaxis de objeto -> asi se accede a la propiedad del objeto
// console.log(producto.nombreProducto);

// //Otra forma de acceder, no es tan comun
// console.log(producto["precio"]);


//Agregar propiedades
producto.imagen = "imagen";

//Eliminar productos
delete producto.disponible;
console.log(producto);