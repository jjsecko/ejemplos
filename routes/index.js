var express = require('express');
var router = express.Router();
var contacto = require('../controllers/contacto')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/regC', contacto.RegistroContacto);
router.get('/respuestaContacto', contacto.RespuestaContacto);

module.exports = router;
