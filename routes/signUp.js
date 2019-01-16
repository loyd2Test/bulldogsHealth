var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signUp', { title: 'Express' });
});

module.exports = router;

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;