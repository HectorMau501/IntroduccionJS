const producto = {
    nombreProducto :  "Monitor 20 Pulgadas" , //Esto es propiedad o llave del objeto 
    precio : 300,
    disponible : true
}

const medida = {
    peso : "1.kg",
    medida : '1m'
}

//Una buena practica de unir a dos objetos es NO modificar los datos originales
const NuevoProducto = {...producto, ...medida};

console.log(producto);
console.log(NuevoProducto);