let mainController = {
    links (req, res) {
        let current = res.locals.current;
        let links = [
            `${current}`,
            'lala'
        ];
        res.status(200).json({
            void: 'My REST API links',
            links
        });
    }
};

module.exports = mainController;