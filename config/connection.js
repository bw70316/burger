var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
      host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "xiz80oae34h4tkb2",
      password: "qxf3vn97todoqlqp",
      database: "qw7vti9ulav7nkxf"
  });
};

//connects to my jawsdb and mysql db


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//throws error if there is an error, otherwise says connects to 

module.exports = connection;