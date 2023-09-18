//Switch

const metodoPago = 'cheque';

switch(metodoPago){
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'cheque':
        console.log("Revizaremos los fondos primero");
        break;    
    default: console.log("No se encuentra el metodo de pago") ;  
        break;
}