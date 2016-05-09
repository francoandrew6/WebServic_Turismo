/**
 * Created by ACE on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.create({
                nombre: req.body.nombre,
                correo: req.body.correo,
                nick: req.body.nick,
                direccion: req.body.direccion,
                contraseña: req.body.contraseña,
                telefono: req.body.telefono,
                id_Rol: req.body.id_Rol
            }).then(function (usuario) {
                res.json(usuario);
                res.send({message: nombre+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.findAll().then(function (usuario) {
                res.json(usuario);
            });
        },
        edit:function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.find(req,body.id_usuario).then(function (usuario) {
                if(usuario){
                    usuario.updateAttributes({
                        nombre: req.body.nombre,
                        correo: req.body.correo,
                        nick: req.body.nick,
                        direccion: req.body.direccion,
                        contraseña: req.body.contraseña,
                        telefono: req.body.telefono,
                        id_Rol: req.body.id_Rol
                    }).then(function (usuario) {
                        res.json(usuario);
                        res.send({message: nombre+" ha sido editado"});
                    });
                }else {
                    res.status(404).send({ message: "Usuario no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.destroy({
                where: {
                    id_Usuario: req.body.id_Usuario
                }
            }).then(function (usuario) {
                res.json(usuario);
                res.send({message: id_Usuario+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.find(req.body.id_Usuario).then(function (usuario) {
                if(usuario) {
                    res.json(usuario);
                } else {
                    res.status(404).send({ message: "Usuario no encontrado"});
                }
            });
        }
    }

};