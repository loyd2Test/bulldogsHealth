var express = require('express');
var router = express.Router();
var models = require('../models');

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

router.post('/new-job', function(req, res, next) {
  var id = req.body.id;
  console.log(id);
  models.Job.findOrCreate({where: {title: req.body.title, companyId: id}, defaults:{city:req.body.city, state:req.body.state, startDate:req.body.startDate, endDate:req.body.endDate, description:req.body.description}})
  .spread((user, created) => {
    console.log(user.get({
      plain: true
      
    }))
    // if(created == true){
      // res.render('companyUser',{user,created});
   
      // models.Job.findOne({where:{email: user.email}
      // }).then(function(user) {
      //   res.render('companyUser', {
      //     user
      //   });
      // }); 

    // }
    console.log(created)

  })
});

router.post('/add-admin', function(req,res,next){
  if(req.body.password == req.body.passwordConfirm){
    // res.json(req.body);
  models.otherLogins.findOrCreate({where: {username: req.body.username}, defaults:{companyId: req.body.id,password: req.body.password}})
  .spread((user, created) => {
    console.log(user.get({
      plain: true
      
    }))
    if(created == true){
      res.render('companyUser');
    }
    console.log(created)

  })

}
    
})

function checkNewjob(){
  console.log("Hi there")

}