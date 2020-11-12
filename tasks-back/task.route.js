const express = require('express');
const postRoutes = express.Router();

// Require Post model in our routes module
let Task = require('./task.model');

// Defined store route
postRoutes.route('/add').post(function (req, res) {
  let task = new Task(req.body);
  task.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
    Task.find(function(err, tasks){
    if(err){
      res.json(err);
    }
    else {
      res.json(tasks);
    }
  });
});

// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Task.findById(id, function (err, task){
      if(err) {
        res.json(err);
      }
      res.json(task);
  });
});

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
    Task.findById(req.params.id, function(err, task) {
    if (!task)
      res.status(404).send("data is not found");
    else {
        task.title = req.body.title;
        task.description = req.body.description;
        task.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').delete(function (req, res) {
    Task.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes;