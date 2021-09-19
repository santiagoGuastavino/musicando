let express = require('express');
let app = express();

let mainRouter = require('./routes/main');

app.use('/', mainRouter);

app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        err: 'Not found'
    });
    next();
})

let port = process.env.PORT || 3001;
app.listen(port, () => console.log('Server running: 3001'));