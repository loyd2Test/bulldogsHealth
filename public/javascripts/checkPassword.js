function checkPasswordMatch() {
    var password = $("#p1").val();
    var confirmPassword = $("#p2").val();
    // console.log(password)
    if(password && confirmPassword == '')
    $('#divCheckPasswordMatch').text("Please enter a password");
    if (password != confirmPassword){
        $('#divCheckPasswordMatch').text("Passwords do not match!");
    $("input[type=submit]").prop("disabled", true);}
    
    else{$('#divCheckPasswordMatch').text("Passwords match.");
    $("input[type=submit]").prop("disabled", false);}
    
}

$(document).ready(function () {
    $("#p2").keyup(checkPasswordMatch);
});


// $(document).ready(function (){
//     validate();
//     $('#f, #l, #m, #p1, #p2').change(validate);
// });

// function validate(){
//     if ($('#f').val().length   >   0   &&
//         $('#l').val().length  >   0   &&
//         $('#m').val().length  >   0   &&
//         $('#p1').val().length  >   0   &&
//         $('#p2').val().length    >   0) {
//         $("input[type=submit]").prop("disabled", false);
//     }
//     else {
//         $("input[type=submit]").prop("disabled", true);
//     }
// }