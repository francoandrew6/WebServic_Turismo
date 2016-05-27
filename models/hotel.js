/**
 * Created by ACE on 09/05/2016.
 */
  module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hotel', {
		id_Hotel: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		descripcion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		direccion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		id_Departamento: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			references: {
				model: 'departamento',
				key: 'id_Departamento'
			}
		}
	}, {
		tableName: 'hotel',
		timestamps:false
	});
};