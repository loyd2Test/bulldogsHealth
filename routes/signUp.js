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
  res.render('signUp', { title: 'Express' });
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
