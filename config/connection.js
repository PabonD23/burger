var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port:3306,
        host: 's0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 's6v4ga54d3k3m42y',
        password: 'j9gszfwkqxs6fmwo',
        database: 'fac2nvfcrgc932sm'

    });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;


