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

let movementInterval;

const handleUserInput = (key) => {

  if (key === '\u0003') {
    process.exit();
  }

  clearInterval(movementInterval);

  if (key === 'w') {
    movementInterval = setInterval(() => connection.write('Move: up'), 100);
  } else if (key === 'a') {
    movementInterval = setInterval(() => connection.write('Move: left'), 100);
  } else if (key === 'd') {
    movementInterval = setInterval(() => connection.write('Move: right'), 100);
  } else if (key === 's') {
    movementInterval = setInterval(() => connection.write('Move: down'), 100);
  }
};

module.exports = {
  setupInput
};