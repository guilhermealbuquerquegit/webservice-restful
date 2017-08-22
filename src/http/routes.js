const routes = (server) => {

    server.get('/', (req, res, next) => {
        res.send('Hello');

        next();
    });
}


module.exports = routes;