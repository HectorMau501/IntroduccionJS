//this, palabra reservada

const reservacion = {
    nombre: 'Mau',
    apellido: 'Rodriguez',
    total: 1200,
    pagado: false,
    //No se puede utilizar arrow funtion
    informacion: function(){ //This significa que va hacer referencia al objeto sobre el cual se esta llamando
        console.log(`Cliente ${this.nombre} reservo y su 
        cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Mau',
    apellido: 'Rodriguez',
    total: 1200,
    pagado: false,
    informacion: function(){ //This significa que va hacer referencia al objeto sobre el cual se esta llamando
        console.log(`Cliente ${this.nombre} reservo y su 
        cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();
