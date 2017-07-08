/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//localhost:1337/Auth/logIn
//                  /logOut
//                  /logInFacebook
module.exports = {
	logIn:function (req,res) {
	  var parametros = req.allParams();
    if(parametros.correo&&parametros.password){

      Usuario.findOne({
        correo:parametros.correo
      }).exec(function (err, usuarioEncontrado){
        if (err) return res.serverError("Error".err);
        if (!usuarioEncontrado) {
          return res.notFound("Usuario no encontrado");
        }
      });
	    return res.ok("Si mandaste correo y password")
    }else {
      return res.badRequest("No envia correo y password")
    }

  },
  logOut:function (req,res) {

  },
  logInFacebook:function (req,res) {

  }
};

