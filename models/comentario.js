/** * Created by ACE on 09/05/2016.*/
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comentario', {
		id_Comentario: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		descripion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		punteo: {
			type: DataTypes.INTEGER(15),
			allowNull: true
		},
		fecha: {
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
		tableName: 'comentario',
		timestamps:false
	});
};
