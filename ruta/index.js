/**
 * Created by ACE on 06/05/2016.
 */
var ruta=require('express').Router();

module.exports=(function(app) {
    var usuario = require('../controller/UsuarioController.js')(app);
    ruta.get('/', function (peticion, respuesta) {
        respuesta.send("Sevicio Iniciado");
    });
    //ruta.post('/usuario/registro',usuario.registro);
    //ruta.post('/usuario/login',usuario.login);
    ruta.get('/usuario',usuario.list);
    ruta.post('/usuario',usuario.add);
    ruta.put('/usuario',usuario.edit);
    ruta.delete('/usuario',usuario.delete);


    return ruta;
});