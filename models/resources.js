/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resources', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		update_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'resources'
	});
};
