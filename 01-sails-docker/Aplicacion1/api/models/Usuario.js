/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Passwords = require('machinepack-passwords');
module.exports = {

  attributes: {
    nombre:{
      type:"string"
    },
    correo:{
      type:"email"
    },
    password:{
      type:"string",
      required:true
    },
    duenosMascotas:{
      collection:"UsuarioMascota",
      via:"idUsuario"
    }
  },
  beforeCreate: function (usuario,cb) {
    // sails.log.info("Usuario",usuario);
    // usuario.nombre = "Joseee";
    // usuario.password = "12345";
    // cb();


    //if (usuario.password) {
    Passwords.encryptPassword({password: usuario.password}).exec({
      error: function (err) {
       cb("error en hash Password",err)
      },
      success: function (hashedPassword) {
       usuario.password = hashedPassword;
       cb()
      },
    });
    //}else{
      //cb();
    //}


  }

};

