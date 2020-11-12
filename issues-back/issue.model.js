const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Issue
let Issue = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'issues'
});

module.exports = mongoose.model('Issue', Issue);