var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginA', { title: 'Express' });
});

module.exports = router;

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;

router.post('/checkAdmin', function(req,res,next){
  // models.Company.findOne({ where: {name: 'Florida Hospital'} }).then(function(comp) {
  //   if (comp == null) {
  //     res.send("No results found");
  //   } else {
  //     res.json(comp);
  //   }
  // });
  // res.json(req.body);
// Current End
})

