var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
    "name": String,
    "sname": String
});

module.exports = mongoose.model('team', teamSchema);