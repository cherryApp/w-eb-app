var mongoose = require('mongoose');

var matchSchema = mongoose.Schema({
    place: String,
    team1: String,
    team2: String,
    goal1: Number,
    goal2: Number,
    startDate: {type: Date, default: new Date()},
    done: Boolean
});

module.exports = mongoose.model('match', matchSchema);