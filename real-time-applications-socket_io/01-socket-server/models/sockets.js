class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.on("msg", (data) => {
        console.log(data);
        this.io.emit("reply", data);
      });
    });
  }
}

module.exports = Sockets;
