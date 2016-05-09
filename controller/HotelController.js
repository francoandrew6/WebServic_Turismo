/**
 * Created by ACE on 09/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var SitioTuristico = app.get('sitioturistico');
            SitioTuristico.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                contrasena: req.body.contrasena,
                id_mapa: req.body.id_mapa,
                id_hotel: req.body.id_hotel,
                id_restaurante: req.body.id_restaurante,
                id_alerta: req.body.id_alerta
            }).then(function (sitioturistico) {
                res.json(sitioturistico);
                res.send({message: nombre+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var SitioTuristico = app.get('sitioturistico');
            SitioTuristico.findAll().then(function (sitioturistico) {
                res.json(sitioturistico);
            });
        },
        edit:function (req, res) {
            var SitioTuristico = app.get('sitioturistico');
            SitioTuristico.find(req,body.id_sitioturistico).then(function (sitioturistico) {
                if(sitioturistico){
                    sitioturistico.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion,
                        contrasena: req.body.contrasena,
                        id_mapa: req.body.id_mapa,
                        id_hotel: req.body.id_hotel,
                        id_restaurante: req.body.id_restaurante,
                        id_alerta: req.body.id_alerta
                    }).then(function (sitioturistico) {
                        res.json(sitioturistico);
                        res.send({message: nombre+" ha sido editado"});
                    });
                }else {
                    res.status(404).send({ message: "Sitio Turistico no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var SitioTuristico = app.get('sitioturistico');
            SitioTuristico.destroy({
                where: {
                    id_sitioturistico: req.body.id_sitioturistico
                }
            }).then(function (sitioturistico) {
                res.json(sitioturistico);
                res.send({message: nombre+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var SitioTuristico = app.get('sitioturistico');
            SitioTuristico.find(req.body.id_sitioturistico).then(function (sitioturistico) {
                if(sitioturistico) {
                    res.json(sitioturistico);
                } else {
                    res.status(404).send({ message: "Sitio Turistico no encontrado"});
                }
            });
        }
    }

};