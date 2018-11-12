let mysql = require("mysql");

var connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: trivia_db
});

connection.connect(function(err) {
    if (err) {
        throw error;
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;