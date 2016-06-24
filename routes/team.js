var express = require('express');
var router = express.Router();
var teamModel = require('../model/team');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('team', { title: 'Csapatok' });
});

/* Post - create new team. */
router.post('/new', function(req, res, next){
    var team = new teamModel(req.body);
    team.save();
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
    teamModel.update({_id: req.body._id}, data, function(err, match){
        if(err) {
            console.log(err);
        }
        var response = {'success': true};
        res.end( JSON.stringify(response) );
    });
});

/* Get match list. */
router.get('/list', function(req, res, next){
    teamModel.find({}, function(err, data){
        res.json( data );        
    });
});

module.exports = router;
