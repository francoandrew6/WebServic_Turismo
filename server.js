/**
 * Created by ACE on 06/05/2016.
 */
(function(){
    var express = requiere('express');
    var bodyParser = requiere('body-parser');
    var mysql = requiere('mysql');
    var Sequelize = requiere('sequelize');

    var sequelize = new Sequelize('db_turismo', 'root', '123', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max:20,
            min:0
        }
    });
    /*
        Declaracion de los modelos con el ORM
    */
    var Usuario = sequelize.define('usuario', {
        id_Usuario: {typr: Sequelize.INTEGER, primeryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRGING, allowNull: false},
        correo: {type: Sequelize.STRGING, allowNull: false},
        nick: {type: Sequelize.STRGING, allowNull: false},
        direccion: {type: Sequelize.STRGING, allowNull: false},
        contraseña: {type: Sequelize.STRGING, allowNull: false},
        telefono: {type: Sequelize.INTEGER, allowNull: false}
    });

    var Lugar = sequelize.define('lugar', {
        id_Lugar: {typr: Sequelize.INTEGER, primeryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRGING, allowNull: false},
        descripcion: {type: Sequelize.STRGING, allowNull: false},
        
    });
    sequelize.sync({force: true});
    var puerto=3000;
    var conf=requiere('./config');
    var app=express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.son());
    app.use('api/v1',require('.router')(app));
    app.listen(puerto,function(){
        console.log("Servidor Iniciado en el puerto: "+puerto);
        console.log("Debug del server: ");
    });
});