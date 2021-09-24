let db = require('../database/models');

let songsController = {
    list: async (req, res) => {
        db.Cancion.findAll({
            attributes: [
                'nombre',
                'compositor',
                'milisegundos',
                'bytes',
                'precioUnitario'
            ],
            
            limit: 50
        })
            .then(canciones => {
                console.log(canciones);
                res.json(canciones)
            })
            .catch(err => res.json(err))
        // let warning = null;
        // let allSongs = await db.Cancion.findAll();
        // try {
        //     let limit = 50;
        //     let offset = 0;
        //     let fiftySongs = await db.Cancion.findAll({
        //         include: ['album'],
        //         limit: limit,
        //         offset: offset
        //     }, {
        //         include: [
        //             'album',
        //             'genero'
        //         ]
        //     });
        //     try {
        //         fiftySongs = fiftySongs.map(song => {
        //             console.log(song);
        //             song = {
        //                 nombre: song.nombre,
        //                 album: song.album.dataValues.titulo,
        //                 compositor: song.compositor,
        //                 genero: song.genero.dataValues.genero.nombre,

        //             }
        //             return song
        //         })
        //         res.status(200).json({
        //             status: 200,
        //             total: allSongs.length,
        //             resultsPerPage: 50,
        //             canciones: fiftySongs
        //         })
        //     } catch(err) {
        //         res.status(500).json({
        //             status: 500,
        //             err
        //         });
        //     };
        // } catch(err) {
        //     res.status(500).json({
        //         status: 500,
        //         err
        //     });
        // };
        // let limit = 50;
        // let offset = 0;
        // if (req.params.id) {
        //     let page = parseInt(req.params.id);
        //     offset = page * limit + 1;
        // }

    },

    pageRedirect (req, res) {
        res.redirect('/songs/1');
    }
};

module.exports = songsController;