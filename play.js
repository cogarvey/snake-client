// THIS IS WHERE WE LAUNCH THE GAME CLIENT
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();