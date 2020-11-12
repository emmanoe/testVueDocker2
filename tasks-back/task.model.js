const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Task
let Task = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'tasks'
});

module.exports = mongoose.model('Task', Task);