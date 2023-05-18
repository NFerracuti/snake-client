const net = require('net');
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => console.log(data));

  conn.on("connect", () => {
    console.log("Connected to the game server");
    conn.write("Name: Nik");
    conn.write("Say: silly snake goes sssssssss");
    conn.write("Say: i'm a hungry lil snek");
    conn.write("Say: sssssssss");
    // Add other connect-related actions here
  });

  // conn.on("connect", () => setInterval(() => conn.write('Move: up'), 50));
  // conn.on("connect", () => setInterval(() => conn.write('Move: right'), 100));

  return conn;
};

module.exports = {
  connect
};