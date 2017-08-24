const restify = require('restify');
const routes = require('../http/routes');
const cors = require('./cors');
const server = restify.createServer();

server.pre(cors.preflight);


server.use(cors.actual);

server.use(restify.plugins.bodyParser());




routes(server);

module.exports = server;





