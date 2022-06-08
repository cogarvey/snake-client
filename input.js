// setup interface to handle user input from stdin
// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {

  if (key === '\u0003' || key === 'p') {
    process.exit();
  };
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'm') {
    connection.write('Say: Move please!');
  }
  if (key === 'n') {
    connection.write("Say: NOM NOM NOM");
  }
}


module.exports = { setupInput };