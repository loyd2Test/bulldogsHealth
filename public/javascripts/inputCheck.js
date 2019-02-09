function inputCheck() {
    var state = $("#s").val();
    var start = $("#sd").val();
    var end = $("#ed").val();

    if(state.length>2){
        $('#stateCheck').text("Max 2 characters (ex: Fl)");
        $('#stateCheck').show();
    }
    else{
        // $('#stateCheck').text("");
        $('#stateCheck').hide();
    }

    // var timeout = null;
    // timeout=setTimeout()
    re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if(start != '' && !start.match(re)) {
        // alert("Invalid date format: " + start);
        $('#startCheck').show();
        $('#startCheck').text("Invalid Date Format. Enter the date as mm/dd/yyyy");
    }

    
    else{
        $('#startCheck').hide();
    }

    if(end != '' && !end.match(re)) {
        // alert("Invalid date format: " + start);
        $('#endCheck').show();
        $('#endCheck').text("Invalid Date Format. Enter the date as mm/dd/yyyy");
    }

    
    else{
        $('#endCheck').hide();
    }


}

$(document).ready(function () {
    $("#s").keyup(checkPasswordMatch);
});



