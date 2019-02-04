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
  models.Candidate.findOne({ where: {email: req.body.email} }).then(function(user) {
    if (user == null) {
      res.render('signUp', { title: 'Express' });
    } else {
      if(user.email == req.body.email){
        console.log('This user exists already');
        
      }
      else{
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


router.post('/new', function(req,res,next){
  // res.json(req.body);
  models.Candidate.findOrCreate({where: {email: req.body.email}})
  .spread((user, created) => {
    console.log(user.get({
      plain: true
      
    }))
    if(created == true){

    }
    console.log(created)

  })
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
