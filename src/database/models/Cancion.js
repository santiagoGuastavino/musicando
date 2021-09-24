module.exports = (sequelize, DataTypes) => {
    let alias = 'Cancion';
    let cols = {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255)
        },
        idAlbum: {
            type: DataTypes.INTEGER,
            field: 'id_album'
        },
        idTipoDeMedio: {
            type: DataTypes.INTEGER,
            field: 'id_tipo_de_medio'
        },
        idGenero: {
            type: DataTypes.INTEGER,
            field: 'id_genero'
        },
        compositor: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: true
        },
        milisegundos: {
            type: DataTypes.INTEGER
        },
        bytes: {
            type: DataTypes.BIGINT
        },
        precioUnitario: {
            type: DataTypes.DECIMAL(3,2),
            field: 'precio_unitario'
        }
    };
    let config = {
        tableName: 'canciones',
        timestamps: false,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        modulefreezeTableName: true
    };
    let Cancion = sequelize.define(
        alias,
        cols,
        config
    );
    Cancion.associate = (model) => {
        Cancion.belongsTo(model.Album, {
            as: 'album',
            foreignKey: 'id_album'
        });
        Cancion.belongsTo(model.Medio, {
            as: 'medio',
            foreignKey: 'id_tipo_de_medio'
        });
        Cancion.belongsTo(model.Genero, {
            as: 'genero',
            foreignKey: 'id_genero'
        });
    };
    return Cancion;
};