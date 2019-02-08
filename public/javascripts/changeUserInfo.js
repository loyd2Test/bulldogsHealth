var express = require('express');
var router = express.Router();
var models = require('../models');

function change() {
    var id = document.getElementById("me").getAttribute("data-1");
    $('#hi').text(id);
    // var me = user;
    console.log(id);
    models.Company.findOne({where:{id: id}}).then(function(user) {
    //   res.render('user', {user});
        $('#bye').text(user.firstName);
    });

    
}

$(document).ready(function () {
    $("#checkIt").onclick(change);
});

module.exports = router;