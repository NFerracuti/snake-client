const net = require('net');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = (key) => {

  if (key === 'w') {
    setInterval(() => connection.write('Move: up'), 200);
  } else if (key === 'a') {
    setInterval(() => connection.write('Move: left'), 200);
  } else if (key === 'd') {
    setInterval(() => connection.write('Move: right'), 200);
  } else if (key === 's') {
    setInterval(() => connection.write('Move: down'), 200);
  } else if (key === '\u0003') {
    process.exit();
  };
}

module.exports = {
  setupInput
};