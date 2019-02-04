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
  models.Admin.findOne({ where: {userName: req.body.user} }).then(function(user) {
    if (user == null) {
      res.send("User not found");
    } else {
      if(user.password == req.body.pass){
        console.log('user found');
        // res.render('usersA', { title: 'Express' });
        models.Candidate.findAll({
        }).then(function(cands) {
          res.render('dashboardA', {
            title: 'Sequelize: Express Example',
            cands: cands
          });
        }); 
      }
      else{
        res.send("Incorrect password for "+req.body.user);

      }
      // res.send(user);
      // console.log('user found');
      // res.send(user.lastName);
      // console.log(user.userName,user.password,user.firstName);
    }
  });
  // res.json(req.body);
// Current End
})

