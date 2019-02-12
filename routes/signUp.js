var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signUp', { title: 'Express' });
});

module.exports = router;

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
router.post('/check', function(req,res,next){ 
  var which = req.body.type;
  console.log(which);
  if(which == 'I'){
    res.render('signUp', { title: 'Express' });
  }
  else{
    res.render('companySignUp', { title: 'Express' });
  }
  
})


router.post('/new', function(req,res,next){
  if(req.body.password == req.body.passwordConfirm){
      // res.json(req.body);
    models.Candidate.findOrCreate({where: {email: req.body.email}, defaults:{firstName: req.body.first, lastName: req.body.last, password: req.body.password, birthday: req.body.birthday}})
    .spread((user, created) => {
      console.log(user.get({
        plain: true
        
      }))
      if(created == true){
        models.Candidate.findOne({where:{email: user.email}
        }).then(function(user) {
          res.render('user', {
            user
          });
        }); 

      }
      console.log(created)

    })

  }
 

  // models.Candidate.findOrCreate({ where: {email: req.body.email} }).then(function(user) {
  //   if (user == null) {
  //     res.send("User not found");
  //   } else {
  //     if(user.password == req.body.pass){
  //       console.log('user found');
  //       // res.render('usersA', { title: 'Express' });
  //       models.Candidate.findAll({
  //       }).then(function(cands) {
  //         res.render('dashboardA', {
  //           title: 'Sequelize: Express Example',
  //           cands: cands
  //         });
  //       }); 
  //     }
  //     else{
  //       res.send("Incorrect password for "+req.body.user);

  //     }
  //     // res.send(user);
  //     // console.log('user found');
  //     // res.send(user.lastName);
  //     // console.log(user.userName,user.password,user.firstName);
  //   }
  // });

  

})
router.post('/newCompany', function(req,res,next){
  if(req.body.password == req.body.passwordConfirm){
      // res.json(req.body);
    models.Company.findOrCreate({where: {name: req.body.name}, defaults:{website:req.body.website,email:req.body.email, username: req.body.username, password: req.body.password}})
    .spread((user, created) => {
      console.log(user.get({
        plain: true
        
      }))
      // if(created == true){
        models.Company.findOne({ where: {email: user.email} }).then(function(user) {
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
          });
      
      
           
          
        });
        // models.Company.findOne({where:{email: user.email}
        // }).then(function(user) {
        //   res.render('companyUser', {
        //     user
        //   });
        // }); 

      // }
      console.log(created)

    })

  }
 

})