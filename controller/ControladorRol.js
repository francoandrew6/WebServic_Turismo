module.exports=function(modelo){
    return {
        add:function(req,res){
            modelo.rol.create({
                id_Rol: null,
                nombre:req.body.nombre,
                descripcion:req.body.descripcion
            }).then(function(){
                res.json({"mensaje":"Rol Agregado"});
            }).error(function(err){
                res.json({"mensaje":"El Rol no se pudo agregar."});
                throw err;
            });
        },
        delete:function(req,res){
            modelo.rol.destroy({
                where:{
                    id_Rol: req.params.id
                }
            }).then(function(){
                res.json({"mensaje":"Rol eliminado"});
            }).error(function(){
                throw err;
            });
        },
        list:function(req,res){
            modelo.rol.findAll({
                where:{
                    id_Rol: req.params.id
                }
            }).then(function(data){
                res.json(data);
            }).error(function(){
                res.json({"mensaje":"Error al listar los Rol ","status":500});
            });
        },
        edit:function(req,res){
            modelo.rol.find({
                where:{
                    id_Rol:req.params.id
                }
            }).then(function(rol){
                if(rol){
                    rol.updateAttributes({
                        id_Rol: null,
                        nombre:req.body.nombre,
                        descripcion:req.body.descripcion
                    }).then(function(rol){
                        res.json({"mensaje":"El rol "+rol.nombre+" fue modificado de manera correcta."});
                    });
                }
            }).error(function(error){
                res.json({"mensaje":"El rol no se pudo editar "+error,"status":500});
            });
        }
    }
}