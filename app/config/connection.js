let mysql = require("mysql");
var Sequelize = require("sequelize");

var sequelize = new Sequelize("questions_db", "root", "root", {
    host: "localhost",
    port: 8889,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0, 
        idle: 10000
    } 
});

// connection.connect(function(err) {
//     if (err) {
//         throw error;
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

module.exports = sequelize;