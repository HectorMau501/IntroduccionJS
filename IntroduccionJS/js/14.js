//Arreglos o Arrays

const numero = [10,20,30,40];

//Tambien se puede crear con el constructor

const meses = new Array("Enero","Febrero","Marzo","Abril","Mayo");

//Puedes mezclar todo tipo de datos
const arreglo = ["Hola", 10, false, "si", null, {nombre: "juan", trabajo: "Programador"}, 
    [1,2,3]];
console.log(arreglo);


//Acceder a los valores de un arreglo
// console.log(numero[2]);

//Conocer la extencion de un arreglo, pasa saber cuantos hay
// console.log(meses.length);

/*Iterar en todos los elementos
Para recorrer el arreglo sin tener que poner un log para acceder a cada uno de los valores*/
// numero.forEach(function(numeros){
//     console.log(numeros)
// });

//No es muy comun la manera del arreglo, ya que tienes que saber la extencion
//numero[4] = 70;
/*Asi mismo de esta manera si lo pones en uno ya existente, puedes modicar 
numero[2] = 10;*/

//Esta manera si es utilizada, el metodo push en donde agrega al final sin saber el numero en el que van
//Sin embargo hoy en dia no se recomienda modificar los arreglos originales
numero.push(100,20,30); //al final del arreglo

//Otra forma de poner datos es con unshift
numero.unshift(-30,-20,-10); // al inicio del arreglo

// meses.pop();//Elimina el ultimo elemento del arreglo
// meses.shift(); //Elimina el primer elemento del arreglo

//Este puede eliminar a partir de la posicion del index y despues cuantos quieres eliminar
//hacia la derecha
meses.splice(2,1);
console.table(numero);
console.table(meses);

//Pero en si hacer todo esto no es recomendado, sino que es recomendable hacer otro arreglo

//Rest Operator o Spread Operator 

const nuevoArreglo = [...meses, "Junio"]; //Puedes hacer lo mismo que push y unshift
console.log(nuevoArreglo);