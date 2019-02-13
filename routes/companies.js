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

router.post('/remove-admin', function(req,res,next){
  var which = req.body.type;
  var myid = req.body.my_id;
  console.log(which);
  console.log(myid);
  // models.Job.findAll({where:{companyId: value}}).then(function(jobs){}),
  // models.Company.findOne({ where: {username: req.body.username} }).then(function(user) {
    
    
  // });
})


router.post('/check', function(req,res,next){
  // models.Job.findAll({where:{companyId: value}}).then(function(jobs){}),
  models.Company.findOne({ where: {username: req.body.username} }).then(function(user) {
    if (user == null) {
      models.otherLogins.findOne({ where: {username: req.body.username} }).then(function(user){
        if (user == null){
          res.send("User not found");
        }
        else{
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
            models.Job.findAll({where:{companyId: user.companyId}}).then(function(jobs){
              models.otherLogins.findAll({where:{companyId: user.companyId}}).then(function(logins){
                res.render('companyUser',{user,showPass,jobs,logins});
              });    
            });
          }
        }
      });
      
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
        models.Job.findAll({where:{companyId: user.id}}).then(function(jobs){
          models.otherLogins.findAll({where:{companyId: user.id}}).then(function(logins){
            res.render('companyUser',{user,showPass,jobs,logins});
  
          });
          // res.render('companyUser',{user,showPass,jobs});

        });


        // res.render('companyUser',{user,showPass,jobs});
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

// router.get('/my-jobs', function(req, res, next) {
//   models.Job.findAll({where:{companyId: value}}).then(function(jobs) {
//     res.render('companyJobPosts', {
//       title: 'My Job Posts',
//       jobs: jobs
//     });
//   }); 
// });



// router.post('/find-user', function(req, res, next) {
//   console.log(req.body)
//   console.log('This is me')
//   var id = req.body.myId;
//   console.log('hi there ' + id);
// });