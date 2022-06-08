// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require('./constants')


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: CGS');
  });

  return conn;
};

module.exports = { connect };