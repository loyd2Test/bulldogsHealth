var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/find-user', function(req, res, next) {
  console.log(req.body)
  console.log('This is me')
  var id = req.body.myId;
  console.log('hi there ' + id);
});