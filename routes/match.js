var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var matchModel = require('../model/match');
var teamModel = require('../model/team');
var voteModel = require('../model/vote');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('match', { title: 'Mérkőzések' });
});

/* GET meccsek listája a szavazáshoz. */
router.get('/vote', function(req, res, next) {
    matchModel.find({})
        .populate('team1')
        .populate('team2')
        .populate('vote')
        .exec(function(err, data){
            res.json( data );        
        });
});

/** POST szavazatok mentése. */
router.post('/vote', function(req, res, next){
    var matches = req.body;
    for( var i = 0; i < matches.length; i++ ) {
        var vote = new voteModel(matches[i].vote);
        vote.save();
        matches[i].vote = vote._id;
        matchModel.update({_id: matches[i]._id}, matches[i], function(err, mData){
            if(err) {
                console.log(err);
            }
        });
    }
  
    res.end('{"success": true}');
});

/* Post - create new match. */
router.post('/new', function(req, res, next){
    var match = new matchModel(req.body);
    match.save();
    var response = {'success': true};
    res.end( JSON.stringify(response) );
});

/* Post - update match. */
router.post('/update', function(req, res, next){
    var data = {};
    for( var k in req.body ){
        if (k !== '_id') {
            data[k] = req.body[k];
        }
    }
    matchModel.update({_id: req.body._id}, data, function(err, match){
        if(err) {
            console.log(err);
        }
        var response = {'success': true};
        res.end( JSON.stringify(response) );
    });
});

/* Get match list. */
router.get('/list', function(req, res, next){
    matchModel.find({}, function(err, data){
        res.json( data );        
    });
});

/** Meccs törlése. */
router.delete('/:id', function(req, res, next){
    matchModel.remove({'_id': req.params.id}, function(err, data){
        if(err){
            res.end('remove failed');
        } else {
            res.json(data);
        }
    })
});



module.exports = router;
