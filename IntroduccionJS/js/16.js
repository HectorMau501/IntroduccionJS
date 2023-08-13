//Declaracion de Funciones es como con las variables no puedes iniciar con numeros

//En JavaScript se ejecuta en dos etapas una es el registro 

//Para un trabajo te ponen esto, y ponen que en ambos casos cuando primero se llama la funcion
// va a marcar error y no, solo en la segunda. se la llama HOSTING

//Cuerpo de una funcion a lo que esta adentro de ella
function sumar(){
    console.log(10 + 10);
}

sumar();

//Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}

sumar2();

//IIFE no se recomienda para reutilizar, se utiliza para proteger las variables
(function(){
    console.log("Esta es una funcion");
})();//Se llama a mandar desde ahi

console.log(cliente);
