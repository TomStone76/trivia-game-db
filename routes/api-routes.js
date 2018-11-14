var Q = require("../app/config/models/question.js");

module.exports = function (app) {
    app.get("/api/question/", function (req, res) {
        Question.findAll({
            where: {
                question: req.params.question
            }
        }).then(function (results) {
            res.json(results);

        });
    });
}

