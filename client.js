const net = require('net');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port:  50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => console.log(data));

  conn.on("connect", (connect) => console.log("Connected to the game server"));

  conn.on("connect", () => conn.write("Name: NPF"));

  // conn.on("connect", () => setInterval(() => conn.write('Move: up'), 50));
  // conn.on("connect", () => setInterval(() => conn.write('Move: right'), 100));

  return conn;
};

module.exports = {
  connect
};