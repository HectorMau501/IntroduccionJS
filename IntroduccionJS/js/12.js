// "use strict"; //Correr JS en modo estricto

const producto = {
    nombreProducto :  "Monitor 20 Pulgadas" , //Esto es propiedad o llave del objeto 
    precio : 300,
    disponible : true
}

//Esto es para que no puedas agregar mas propiedades ni poderlas eliminar ni modificar
//, previenes agregar nuevas propiedades
//Tambien existe seal es lo mismo que freeze solo que seal si te deja modificar los ya existentes
Object.freeze(producto);


producto.imagen = "imagen.jpg";

//Y aca .selead
console.log(Object.isFrozen(producto));

console.log(producto);