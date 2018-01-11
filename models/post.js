/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('post', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		resources_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'resources',
				key: 'id'
			}
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
		tableName: 'post'
	});
};
