const net = require('net');

const { MESSAGES, DOWN, RIGHT, LEFT, UP } = require('./constants');
let connection;

// define the inputs
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// for use below, so we can stop movements
let movementInterval;

// logical function to handle the user controls
const handleUserInput = (key) => {

  if (key === '\u0003') {
    process.exit();
  }

  if (key === UP) {
    clearInterval(movementInterval);
    movementInterval = setInterval(() => connection.write('Move: up'), 100);
  } else if (key === LEFT) {
    clearInterval(movementInterval);
    movementInterval = setInterval(() => connection.write('Move: left'), 100);
  } else if (key === RIGHT) {
    clearInterval(movementInterval);
    movementInterval = setInterval(() => connection.write('Move: right'), 100);
  } else if (key === DOWN) {
    clearInterval(movementInterval);
    movementInterval = setInterval(() => connection.write('Move: down'), 100);
  }

  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }

};

module.exports = {
  setupInput
};