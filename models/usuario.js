module.exports = function(sequelize, DataTypes) {
    return sequelize.define('usuario', {
        id_Usuario: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nick: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },

        telefono: {
            type: DataTypes.INTEGER(15),
            allowNull: true
        },
        id_Rol: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
            references: {
                model: 'rol',
                key: 'id_Rol'
            }
        }
    }, {
        tableName: 'usuario',
        timestamps:false
    });
};
