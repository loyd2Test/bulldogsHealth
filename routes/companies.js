var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Company.findAll({
  }).then(function(comps) {
    res.render('companies', {
      title: 'Sequelize: Express Example',
      comps: comps
    });
  }); 
  //res.render('companies', { title: 'Express' });
});

module.exports = router;

router.get('/companyLogin', function(req, res, next) {
  res.render('companyLogin', { title: 'Express' });
});

module.exports = router;
