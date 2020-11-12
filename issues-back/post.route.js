const express = require('express');
const postRoutes = express.Router();

// Require Post model in our routes module
let Issue = require('./issue.model');

// Defined store route
postRoutes.route('/add').post(function (req, res) {
  let issue = new Issue(req.body);
  issue.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
    Issue.find(function(err, issues){
    if(err){
      res.json(err);
    }
    else {
      res.json(issues);
    }
  });
});

// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Issue.findById(id, function (err, issue){
      if(err) {
        res.json(err);
      }
      res.json(issue);
  });
});

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
    Issue.findById(req.params.id, function(err, issue) {
    if (!issue)
      res.status(404).send("data is not found");
    else {
        issue.title = req.body.title;
        issue.body = req.body.body;
        issue.save().then(() => {
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
    Issue.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes;