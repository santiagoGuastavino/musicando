module.exports = (sequelize, DataTypes) => {
    let alias = 'Medio';
    let cols = {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255)
        }
    };
    let config = {
        tableName: 'tipos_de_medio',
        timestamps: false,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        modulefreezeTableName: true
    };
    let Medio = sequelize.define(
        alias,
        cols,
        config
    );
    Medio.associate = (model) => {
        Medio.hasMany(model.Cancion, {
            as: 'canciones',
            foreignKey: 'id_tipo_de_medio'
        });
    };
    return Medio;
};