module.exports = function(sequelize, DataTypes) {
    return sequelize.define('bitacora', {
        id_Bitacora: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        evento: {
            type: DataTypes.STRING,
            allowNull: true
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_hora: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'bitacora',
        timestamps:false
    });
};