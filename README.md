Snek.js
A terminal-based Snake implementation written in Node.js. Works alongside snek-multiplayer server. 

play.js
Establishes connection to the server.

input.js
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

client.js
Establishes connection to the server- assumes localhost. Prints Connected to server... upon successful connection. Sets the snake-name to Nik upon successful connection. Logs server responses to screen.

Supported commands by Snek-Multiplayer server
Commands are passed by as utf8 strings between client and server. Name: Nik

Sets the name for snake; in this case Nik is the desired name.
Recommended max name of 3-character long.