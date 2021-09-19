let mainController = {
    links (req, res) {
        let current = res.locals.current;
        let info = [
            '{optional parameter}'
        ];
        let links = [
            `${current}songs/`,
            `${current}songs/{page}`
        ];
        res.status(200).json({
            void: 'My REST API links',
            info,
            links
        });
    }
};

module.exports = mainController;