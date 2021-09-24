let { sequelize } = require('../database/models');
let db = require('../database/models');

let songsController = {
    list: async (req, res) => {
        let warning = null;
        let param = parseInt(req.params.id);
        let limit = 20;
        let offset = 0;
        let allSongs = await db.Cancion.findAll();
        try {
            if (param) {
                offset = (param - 1) * limit;
                if (param < 1) {
                    offset = 0;
                    warning = 'BAD REQUEST'
                };
                if (Math.ceil(allSongs.length / limit) < param) {
                    offset = (Math.ceil(allSongs.length / limit) -1) * limit;
                    warning = 'BAD REQUEST ::: Page parameter exceeded number of entries. Showing last page'
                };
            };
            let canciones = await sequelize.query(
                `SELECT canciones.id, canciones.nombre AS \'title\', albumes.titulo AS \'album\', tipos_de_medio.nombre AS \'file extension\', generos.nombre as \'genre\', canciones.compositor AS \'composer\', milisegundos AS \'duration\', bytes AS \'size\', precio_unitario AS \'pricePerUnit\' FROM canciones INNER JOIN albumes ON albumes.id = canciones.id_album INNER JOIN tipos_de_medio ON tipos_de_medio.id = canciones.id_tipo_de_medio INNER JOIN generos ON generos.id = canciones.id_genero ORDER BY canciones.id ASC LIMIT ${ limit } OFFSET ${ offset };`, {
                model: db.Cancion
            });
            try {
                canciones.map(cancion => {
                    cancion.dataValues.duration = parseFloat(((cancion.dataValues.duration / 1000) / 60).toFixed(2));
                    cancion.dataValues.size = parseFloat(((cancion.dataValues.size / 1024) / 1024).toFixed(2));
                    cancion.dataValues.pricePerUnit = parseFloat(cancion.dataValues.pricePerUnit);
                    // cancion.dataValues.url = 'lalala';
                    return cancion;
                });
                res.status(200).json({
                    status: 200,
                    warning,
                    entryTotal: allSongs.length,
                    info: `Showing ${ limit } entries per page`,
                    canciones
                });
            } catch(err) {
                res.status(500).json({
                    status: 500,
                    err
                });
            };
        } catch(err) {
            res.status(500).json({
                status: 500,
                err
            });
        };
    },

    pageRedirect (req, res) {
        res.redirect('/songs/1');
    }
};

module.exports = songsController;