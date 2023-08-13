
//Strings o cadenas de texto puedes usar "" o ''
const producto = "\"Aprendiendo JavaScript con el curso de Desarrollo Web Completo\"";
/*const producto2 = String("Monitor de 25 Pulgadas");
const producto3 = new String("Monitor de 525 Pulgadas");*/

/*Sirve para saber el tipo de dato que es la variable
typeof*/

console.log(producto.length);//El .lenght sirve saber cuantas letras hay en la funcion
/*console.log(producto2);
console.log(producto3);*/

/*IndexOF (retorna posicion)
sirve para saber en que posicion se encuentra un texto que tu estas buscando*/
console.log(producto.indexOf("JavaScript"));//Cuando es -1 no lo encontro

/*Includes (retorna true or false)
sirve para saber en que posicion se encuentra un texto que tu estas buscando*/
console.log(producto.includes("JavaScript"));//Cuando es -1 no lo encontro