var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource man');
// });

// router.get('/name', function(req, res, next) {
//   res.send('respond with user name');
// });

router.get('/', function(req, res, next) {
  models.Candidate.findAll({
  }).then(function(cands) {
    res.render('users', {
      title: 'Sequelize: Express Example',
      cands: cands
    });
  }); 
  //res.render('companies', { title: 'Express' });
});
module.exports = router; 
