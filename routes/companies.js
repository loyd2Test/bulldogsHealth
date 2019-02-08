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


router.post('/check', function(req,res,next){
  models.Company.findOne({ where: {username: req.body.username} }).then(function(user) {
    if (user == null) {
      res.send("User not found");
    } else {
      if(user.password == req.body.pass){
        console.log('user found');
        hidePass='';
        showPass='';

        len = user.password.length;
        for(x = len-4; x<len; x++){
            hidePass+=user.password[x];
        }
        numStar = user.password.length - 4;
        for(x=0;x<numStar;x++){
            showPass+=('*');
        }
        showPass = showPass + hidePass;
        console.log(showPass);


        res.render('companyUser',{user,showPass});
      }
      else{
        res.send("Incorrect password for "+req.body.user);

      }
    }
  });
})
module.exports = router;


router.post('/check', function(req,res,next){
  models.Company.findOne({ where: {username: req.body.username} }).then(function(user) {
 
  });
})
module.exports = router;