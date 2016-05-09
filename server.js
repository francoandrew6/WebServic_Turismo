/**
 * Created by ACE on 06/05/2016.
 */
(function(){
    var express = requiere('express');
    var bodyParser = requiere('body-parser');
    var morgan=require('morgan');
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
    var Rol = sequelize.define('rol', {
        id_Rol: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        descripcion: {type: Sequelize.STRING, allowNull: false}
    });

    var Usuario = sequelize.define('usuario', {
        id_Usuario: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        correo: {type: Sequelize.STRING, allowNull: false},
        nick: {type: Sequelize.STRING, allowNull: false},
        direccion: {type: Sequelize.STRING, allowNull: false},
        contraseña: {type: Sequelize.STRING, allowNull: false},
        telefono: {type: Sequelize.INTEGER, allowNull: false},
        id_Rol: {type:Sequelize.INTEGER, references:{
            model: Rol,
            key: 'id_Rol'

        }}
    });

    var Bitacora = sequelize.define('bitacora', {
        id_Bitacora: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        evento: {type: Sequelize.STRING, allowNull: false},
        fechaHora: {type: Sequelize.DATETIME, allowNull: false},
        usuario: {type: Sequelize.STRING, allowNull: false}
    });

    var Departamento = sequelize.define('departamento', {
        id_Departamento: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        descripcion: {type: Sequelize.STRING, allowNull: false}
    });

    var Hotel = sequelize.define('hotel', {
        id_Hotel: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        descripcion: {type: Sequelize.STRING, allowNull: false},
        direccion: {type: Sequelize.STRING, allowNull: false},
        id_Departamento: {type: Sequelize.INTEGER, references:{
            model: Departamento,
            key: 'id_Departamento'
        }}

    });

    var Municipio = sequelize.define('municipio', {
        id_Municipio: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        id_Departamento: {type: Sequelize.INTEGER, references:{
            model: Departamento,
            key: 'id_Departamento'
        }}
    });

    var LugarTuristico = sequelize.define('lugar', {
        id_Lugar: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        descripcion: {type: Sequelize.STRING, allowNull: false},
        direccion: {type: Sequelize.STRING, allowNull: false},
        id_Departamento: {type: Sequelize.INTEGER, references:{
            model: Departamento,
            key: 'id_Departamento'
        }}
        
    });

    var ReservaHotel = sequelize.define('reservaHotel', {
        id_ReservaHotel: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        facturaNombre: {type: Sequelize.STRING, allowNull: false},
        fechaInicio: {type: Sequelize.DATETIME, allowNull: false},
        fechaFinal: {type: Sequelize.DATETIME, allowNull: false},
        cantidad: {type: Sequelize.INTEGER, allowNull: false},
        id_Usuario: {type: Sequelize.INTEGER, references:{
            model: Usuario,
            key: 'id_Usuario'
        }},
        id_Hotel: {type: Sequelize.INTEGER, references:{
            model: Hotel,
            key: 'id_Hotel'
        }}

    });

    var Comentario = sequelize.define('comentario', {
        id_Comentario: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        descripcion: {type: Sequelize.STRING, allowNull: false},
        fecha: {type: Sequelize.DATETIME, allowNull: false},
        punteo: {type: Sequelize.INTEGER, allowNull: false},
        id_Usuario: {type: Sequelize.INTEGER, references:{
            model: Usuario,
            key: 'id_Usuario'
        }},
        id_LugarTuristico: {type: Sequelize.INTEGER, references:{
            model: LugarTuristico,
            key: 'id_LugarTuristico'
        }},
        id_Hotel: {type: Sequelize.INTEGER, references:{
            model: Hotel,
            key: 'id_Hotel'
        }}

    });

    var Alerta = sequelize.define('alerta', {
        id_alerta: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        mensaje: {type: Sequelize.STRING, allowNull: false},
        fecha: {type: Sequelize.DATETIME, allowNull: false},
        id_Usuario: {type: Sequelize.INTEGER, references:{
            model: Usuario,
            key: 'id_Usuario'
        }},
        id_Municipio: {type: Sequelize.INTEGER, references:{
            model: Municipio,
            key: 'id_Muncipio'
        }}

    });

    var Archivo = sequelize.define('archivo', {
        id_Archivo: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        contentType: {type: Sequelize.STRING, allowNull: false},
        tipo: {type: Sequelize.INTEGER, allowNull: false},
        contenido: {type: Sequelize.BINARY, allowNull: false},
        id_Usuario: {type: Sequelize.INTEGER, references:{
            model: Usuario,
            key: 'id_Usuario'
        }},
        id_LugarTuristico: {type: Sequelize.INTEGER, references:{
            model: LugarTuristico,
            key: 'id_LugarTuristico'
        }},
        id_Hotel: {type: Sequelize.INTEGER, references:{
            model: Hotel,
            key: 'id_Hotel'
        }}

    });


    //Has many Relacion de uno a varios
    Rol.hasMany(Usuario, {foreignKey: 'id_Usuario'});
    Usuario.belongsTo(Rol, {foreignKey: 'id_Usuario'});

    Departamento.hasMany(LugarTuristico, {foreignKey: 'id_LugarTuristico'});
    LugarTuristico.belongsTo(Departamento, {foreignKey: 'id_LugarTuristico'});

    Departamento.hasMany(Hotel, {foreignKey: 'id_Hotel'});
    Hotel.belongsTo(Departamento, {foreignKey: 'id_Hotel'});

    Departamento.hasMany(Municipio, {foreignKey: 'id_Municipio'});
    Municipio.belongsTo(Departamento, {foreignKey: 'id_Municipio'});

    Usuario.hasMany(ReservaHotel, {foreignKey: 'id_reservaHotel'});
    ReservaHotel.belongsTo(Usuario, {foreignKey: 'id_reservaHotel'});
    Hotel.hasMany(ReservaHotel, {foreignKey: 'id_reservaHotel'});
    ReservaHotel.belongsTo(Hotel, {foreignKey: 'id_reservaHotel'});

    Usuario.hasMany(Comentario, {foreignKey: 'id_Comentario'});
    Comentario.belongsTo(Usuario, {foreignKey: 'id_Comentario'});
    Hotel.hasMany(Comentario, {foreignKey: 'id_Comentario'});
    Comentario.belongsTo(Hotel, {foreignKey: 'id_Comentario'});
    LugarTuristico.hasMany(Comentario, {foreignKey: 'id_Comentario'});
    Comentario.belongsTo(LugarTuristico, {foreignKey: 'id_Comentario'});

    Usuario.hasMany(Alerta, {foreignKey: 'id_Alerta'});
    Alerta.belongsTo(Usuario, {foreignKey: 'id_Alerta'});
    Municipio.hasMany(Alerta, {foreignKey: 'id_Alerta'});
    Alerta.belongsTo(Municipio, {foreignKey: 'id_Alerta'});

    Usuario.hasMany(Archivo, {foreignKey: 'id_Archivo'});
    Archivo.belongsTo(Usuario, {foreignKey: 'id_Archivo'});
    Hotel.hasMany(Archivo, {foreignKey: 'id_Archivo'});
    Archivo.belongsTo(Hotel, {foreignKey: 'id_Archivo'});
    LugarTuristico.hasMany(Archivo, {foreignKey: 'id_Archivo'});
    Archivo.belongsTo(LugarTuristico, {foreignKey: 'id_Archivo'});


    //SEQUELIZE
    sequelize.sync({force: true});
    var puerto=3000;
    var conf=requiere('./config');
    var app=express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use('/api/v1',require('./ruta')(app));
    app.use(morgan('dev'));

    //App}
    app.set('rol',Rol);
    app.set('usuario',Usuario);
    app.set('bitacora',Bitacora);
    app.set('departamento',Departamento);
    app.set('municipio',Municipio);
    app.set('hotel',Hotel);
    app.set('lugarTuristico',LugarTuristico);
    app.set('reservaHotel',ReservaHotel);
    app.set('comentario',Comentario);
    app.set('alerta',Alerta);
    app.set('archivo',Archivo);


    app.listen(puerto,function(){
        console.log("Servidor Iniciado en el puerto: "+puerto);
        console.log("Debug del server: ");
    });
});