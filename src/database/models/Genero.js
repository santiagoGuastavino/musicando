module.exports = (sequelize, DataTypes) =>{
    let alias = 'Genero';
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
        tableName: 'generos',
        timestamps: false,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        modulefreezeTableName: true
    };
    let Genero = sequelize.define(
        alias,
        cols,
        config
    );
    Genero.associate = (model) => {
        Genero.hasMany(model.Cancion, {
            as: 'canciones',
            foreignKey: 'id_genero'
        });
    };
    return Genero;
};