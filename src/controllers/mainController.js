let mainController = {
    links (req, res) {
        let current = res.locals.current;
        let useful = [
            'between {} references an {optional parameter}'
        ];
        let links = [
            `${current}songs/`,
            `${current}songs/{page}`
        ];
        res.status(200).json({
            title: 'My Songs. REST API interface',
            useful,
            links
        });
    }
};

module.exports = mainController;