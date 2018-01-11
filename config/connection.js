var mysql = require("mysql");

var connection;
if (process.env.burgers_db) {
   connection = mysql.createConnection(process.env.TIMSDB_URL);
} else {
  connection= mysql.createConnection({

  
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
