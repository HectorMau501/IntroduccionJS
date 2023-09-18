//Estructuras de Control

// const puntaje = 1000;

// if(puntaje !== 1000){
//     console.log("No se encontro el puntaje");
// }else{
//     console.log("Si el puntaje es 1000");
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log("si puede pagar");
// }else{
//     console.log("No puede pagar");
// }

const rol = 'EDITOR';

if ( rol === 'ADMINISTRADOR'){
    console.log("Puedes entrar");
}else if( rol === 'EDITOR'){
    console.log("Puedes entrar editor pero no puedes hacer mucho");
}
else{
    console.log("No puedes entrar");
}