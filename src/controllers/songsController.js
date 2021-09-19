let db = require('../database/models');

let songsController = {
    list (req, res) {
        db.Cancion.findAll({
            limit: 50
        })
            .then(canciones => {
                res.status(200).json({
                    status: 200,
                    canciones
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    }
};

module.exports = songsController;