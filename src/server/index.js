const restify = require('restify');
const routes = require('../http/routes');
const cors = require('./cors');
const server = restify.createServer();


routes(server);

module.exports = server;





