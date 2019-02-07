function checkPasswordMatch() {
    var password = $("#p1").val();
    var confirmPassword = $("#p2").val();
    // console.log(password)

    if (password != confirmPassword)
    $('#divCheckPasswordMatch').text("Passwords do not match!");
    else
    $('#divCheckPasswordMatch').text("Passwords match.");
}

$(document).ready(function () {
    $("#p2").keyup(checkPasswordMatch);
});