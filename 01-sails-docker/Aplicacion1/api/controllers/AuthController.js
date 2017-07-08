/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//localhost:1337/Auth/logIn
//                  /logOut
//                  /logInFacebook

var Passwords = require('machinepack-passwords');
module.exports = {
  logIn:function (req,res) {
    var parametros = req.allParams();
    if(parametros.correo&&parametros.password){

      Usuario.findOne({
        correo:parametros.correo
      }).exec(function (err, usuarioEncontrado){
        if (err) return res.serverError("Error",err);
        if (!usuarioEncontrado) {
          return res.notFound("Usuario no encontrado");
        } else{
          if(parametros.password==usuarioEncontrado.password){
            return res.ok("Estas logeado")
          }else{
            return res.badRequest("Password Incorrecta")
          }
        }

      });
    }else {
      return res.badRequest("No envia correo y password")
    }

  },
  logOut:function (req,res) {

  },
  logInFacebook:function (req,res) {

  }
};

