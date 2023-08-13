//Metodos de Propiedad

//Siempre tiene que ser un objeto
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Cancion con el id: ${id}`); //En vez de un String es un templete String
    }, //Propiedad
    pausar : function(){
        console.log(`Pausando...`);
    },
    crearPlayList : function(nombre){
        console.log(`Creando play list es: ${nombre}`);
    },
    reproducirPlayList : function(nombre){
        console.log(`La play list reproduciendo es: ${nombre}`);
    }
}

//console.log(reproductor);

reproductor.borrarCancion= function(id){
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(2303);
reproductor.pausar();
reproductor.borrarCancion(23);
reproductor.crearPlayList('rock');
reproductor.reproducirPlayList('rock');