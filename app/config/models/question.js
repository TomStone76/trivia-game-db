var Sequelize = require("sequelize");
var sequelize = require("../connection.js");

var Question = sequelize.define("question", {
    question: Sequelize.STRING,
    answer: Sequelize.BOOLEAN
});

Question.sync();

module.exports = Question;