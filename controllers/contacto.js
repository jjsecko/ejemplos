//Registro de Contacto
//verificar si es un contacto correcto
//req = peticion
//res = respuesta

exports.RespuestaContacto = function (req, res){
	res.render('RespuestaContacto', {mensaje:'Se Registro el contacto'});
}

exports.RegistroContacto = function (req, res){
	res.render('RegistroContacto', {titulo:'Registro de Contacto'});
}


