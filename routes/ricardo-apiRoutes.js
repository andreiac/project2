var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/tasks", function(req, res) {
    db.Tasks.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/positions", function(req, res) {
    console.log(req.body);
    db.Positions.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/employees", function(req, res) {
    db.Employees.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/tasks", function(req, res) {
    db.Tasks.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/shifts", function(req, res) {
    db.Shifts.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};