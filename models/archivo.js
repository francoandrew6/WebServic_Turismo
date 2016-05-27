/**
 * Created by ACE on 09/05/2016.
 */
 module.exports = function(sequelize, DataTypes) {
	return sequelize.define('archivo', {
		id_Archivo: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		content_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tipo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		id_Usuario: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'id_Usuario'
			}
		},
		id_Lugar_Turistico: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			references: {
				model: 'lugar_turistico',
				key: 'id_Lugar_Turistico'
			}
		},
		id_Hotel: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			references: {
				model: 'hotel',
				key: 'id_Hotel'
			}
		}
	}, {
		tableName: 'archivo',
		timestamps:false
	});
};