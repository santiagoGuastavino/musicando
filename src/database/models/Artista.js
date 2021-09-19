module.exports = (sequelize, DataTypes) => {
    let alias = 'Artista';
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
        tableName: 'artistas',
        timestamps: false,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        modulefreezeTableName: true
    };
    let Artista = sequelize.define(
        alias,
        cols,
        config
    );
    Artista.associate = (model) => {
        Artista.hasMany(model.Album, {
            as: 'albumes',
            foreignKey: 'id_album'
        });
    };
    return Artista;
};