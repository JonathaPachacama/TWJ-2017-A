/**
 * UsuarioMascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//Dueños de las mascotas
module.exports = {

  attributes: {
    idUsuario:{
      model:"Usuario"//tabla o modelo papá
    },
    idMascota:{
      model:"Mascota"//tabla o modelo papá
    },
    fechaDeInicioAdopcion:{
      type:"date"
    },
    fechaDeFinalizacionAdopcion:{
      type:"date"
    }
  }
};

