var express = require('express');
var router = express.Router();
var models = require('../models');
module.exports = router;


// router.post('/find-user', function(req, res, next) {
//     console.log('hi there ' + req.body.myID);
// 	var id = req.body.id;
// 	models.Company.findOne({ where: {id: req.body.id} 	}).then(function(user) {
// 		if (user == null) {
// 			res.send("No results found");
// 		} else {
// 			res.json(user);
// 		}
// 	});
// });



router.post('/find-user', function(req, res, next) {
	console.log(req.body)
	console.log('This is me')
	var id = req.body.myId;
	console.log('hi there ' + id);
  });