var express = require('express');
var router = express.Router();
var matchModel = require('../model/match');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('match', { title: 'Mérkőzések' });
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
        console.log(data);
        res.json( data );        
    });
});

module.exports = router;
