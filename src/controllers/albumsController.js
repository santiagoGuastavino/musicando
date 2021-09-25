let db = require('../database/models');

let albumsController = {
    list: async (req, res) => {
        let warning = null;
        
        db.Album.findAll({
            include: ['canciones'],
            limit: 10
        })
            .then(albums => {
                res.status(200).json({
                    status: 200,
                    entryTotal: albums.length,
                    albums
                });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    }
};

module.exports = albumsController;