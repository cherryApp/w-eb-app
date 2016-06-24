var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = mongoose.Schema({
    place: String,
    team1: {type: Schema.Types.ObjectId, ref: 'team'},
    team2: {type: Schema.Types.ObjectId, ref: 'team'},
    goal1: Number,
    goal2: Number,
    vote: {type: Schema.Types.ObjectId, ref: 'vote'},
    startDate: {type: Date, default: new Date()},
    done: Boolean
});

module.exports = mongoose.model('match', matchSchema);