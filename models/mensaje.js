/**
 * Created by ACE on 09/05/2016.
 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mensaje', {
		id_Mensaje: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mensaje: {
			type: DataTypes.STRING,
			allowNull: true
		},
		asunto: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fecha: {
			type: DataTypes.STRING,
			allowNull: true
		},
		idUsuario: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'idUsuario'
			}
		},
		id_Municipio: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			references: {
				model: 'municipio',
				key: 'id_Municipio'
			}
		}
	}, {
		tableName: 'mensaje',
		timestamps:false
	});
};
