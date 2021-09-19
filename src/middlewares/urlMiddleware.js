let urlMiddleware = (req, res, next) => {
    res.locals.current = req.protocol + '://' + req.get('host') + req.originalUrl;
    next();
};

module.exports = urlMiddleware;