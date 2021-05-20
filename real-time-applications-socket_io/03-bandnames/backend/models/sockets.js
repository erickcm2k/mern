const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // Escuchar evento: mensaje-to-server

      socket.on("mensaje-to-server", (data) => {
        console.log("Cliente conectado");
      });

      socket.on("vote", (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      socket.on("delete", (id) => {
        this.bandList.removeBand(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      this.io.emit("current-bands", this.bandList.getBands());
    });
  }
}

module.exports = Sockets;
