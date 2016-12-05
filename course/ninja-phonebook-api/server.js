// require deployd
var deployd = require('deployd');

var defaultPort = 5000;

// configure database etc.
var server = deployd({
  port: process.env.PORT || defaultPort,
  env: 'development',
  db: {
    host: 'ds159767.mlab.com',
    port: 59767,
    name: 'ninja-phonebook',
    credentials: {
      username: 'ninja',
      password: 'ninja'
    }
  }
});

// heroku requires these settings for sockets to work
server.sockets.server.set('transports', ["xhr-polling"]);

// start the server
server.listen();

// debug
server.on('listening', function() {
  console.log("Server is listening on port: " + process.env.PORT || defaultPort);
});

// Deployd requires this
server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});
