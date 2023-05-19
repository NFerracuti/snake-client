### **Snake Client Game**
A terminal-based Snake implementation written in Node.js. Works alongside snek-multiplayer server. 

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 


### **play.js**
Establishes connection to the server.

### **input.js**
Handles all the logic related to setting up input stream and handling user input.

Key	Command
W	sends move up command
A	sends move left command
S	sends move down command
D	sends move right command
Z	sends secret message
X	sends secret message
C	sends secret message
V	sends secret message

**client.js**
Establishes connection to the server- assumes localhost. Prints Connected to server... upon successful connection. Sets the snake-name to Nik upon successful connection. Logs server responses to screen.


### Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.