function checkPasswordMatch() {
    var password = $("#p1").val();
    var confirmPassword = $("#p2").val();
    // console.log(password)
    if(password && confirmPassword == '')
    $('#divCheckPasswordMatch').text("Please enter a password");
    if (password != confirmPassword){
        $('#divCheckPasswordMatch').text("Passwords do not match!");
        $('#divCheckPasswordLen').text("Password must be at least 8 characters");
    $("input[type=submit]").prop("disabled", true);}

    // else{
        
    //     $("input[type=submit]").prop("disabled", false);
    //         $('#divCheckPasswordMatch').text("Passwords match");
        
    // }
    
    else{
        $('#divCheckPasswordMatch').text("");
        if(password.length<7){
            $('#divCheckPasswordLen').text("Password must be at least 8 characters");
            $("input[type=submit]").prop("disabled", true);
        }
        
        else if(password.length>7){
            $('#divCheckPasswordLen').text("");
            $("input[type=submit]").prop("disabled", false);
        }
        
    }


    
}

$(document).ready(function () {
    $("#p2").keyup(checkPasswordMatch);
});
