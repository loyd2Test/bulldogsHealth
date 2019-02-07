var express = require('express');
var router = express.Router();
var models = require('../models');
// module.exports = router;

router.post('/check', function(req,res,next){
    models.Candidate.findOne({ where: {email: req.body.email} }).then(function(user) {
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


          res.render('user',{user,showPass});

        //   models.Candidate.findAll({
        //   }).then(function(cands) {
        //     res.render('user', {title: 'Sequelize: Express Example',cands: cands});
        //   }); 

        }
        else{
          res.send("Incorrect password for "+req.body.user);
  
        }
      }
    });
  })
  module.exports = router;
