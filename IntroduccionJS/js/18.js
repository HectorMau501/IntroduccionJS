//Funciones con parametros y argumentos

//La ventaja de las funciones es que se puede reutilizar

//Hay parametros por defecto, estos son utilizados para cuando no llenas algun campo
function sumar(numero1 = 0 , numero2 = 0 ){
    console.log(numero1 + numero2);
}

sumar(10 , 10); //Argumentos con valores reales
sumar(10 , 323); //Argumentos con valores reales
sumar(32 , 10); //Argumentos con valores reales
sumar(10 , 21); //Argumentos con valores reales
sumar(10 ); //Argumentos con valores reales

const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}

sumar2(30 ,20);

