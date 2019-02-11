var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
   models.Job.findAll({where:{id: [1,2,3,4,5,6,7,8,9,10]}}).then(function(jobs){
    res.render('start', {jobs: jobs, title: 'Express' });
   });
  
});

module.exports = router;

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;

router.get('/admin', function(req, res, next) {
  res.render('loginA', { title: 'Express' });
});

module.exports = router;
