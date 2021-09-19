module.exports = (sequelize, DataTypes) => {
    let alias = 'Album';
    let cols = {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING(255)
        },
        idArtista: {
            type: DataTypes.INTEGER,
            field: 'id_artista'
        }
    };
    let config = {
        tableName: 'albumes',
        timestamps: false,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        modulefreezeTableName: true
    };
    let Album = sequelize.define(
        alias,
        cols,
        config
    );
    Album.associate = (model) => {
        Album.hasMany(model.Cancion, {
            as: 'canciones',
            foreignKey: 'id_album'
        });
        Album.belongsTo(model.Artista, {
            as: 'artista',
            foreignKey: 'id_artista'
        });
    };
    return Album;
};