var mongoose = require('mongoose');

var voteSchema = mongoose.Schema({
    "goal1": {type: Number, default: 0},
    "goal2": {type: Number, default: 0},
    "created_at": {type: Date, default: new Date()}
});

module.exports = mongoose.model('vote', voteSchema);