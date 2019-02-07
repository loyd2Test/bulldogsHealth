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
