const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;

    // HTTP Server
    this.server = http.createServer(this.app);

    // Configuración sockets
    this.io = socketio(this.server, {});
  }

  middlewares() {
    // Public directory
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Initialize middlewares
    this.middlewares();

    // Initialize sockets
    this.configSockets();

    this.server.listen(this.port, () => {
      console.log(`Server running at PORT ${this.port}.`);
    });
  }
}

module.exports = Server;
