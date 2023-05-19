const net = require('net');

const { IP, PORT, MESSAGES } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => console.log(data));

  // connect initialization messages
  conn.on("connect", () => {
    console.log("Connected to the game server");
    conn.write("Name: Nik");
  });

  return conn;
};

module.exports = {
  connect
};