// Display current day and date

var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);


//  Change colors with the ohours
var currentHour = parseInt(moment().format('HH'));

var idArr = [8,9,10,11,12,13,14,15,16,17,18,19]
for(i=8; i<idArr.length + 8; i++){
    if(idArr[i-8] < currentHour){
        $("#text"+i).attr("class","col-md-10 past")
    }else if(idArr[i-8] == currentHour){
        $("#text"+i).attr("class","col-md-10 present")
    }else {
        $("#text"+i).attr("class","col-md-10 future")
    }

    // WHen I refresh the page, then the saved text persists

    $("#text"+i).val(localStorage.getItem("text"+i))
}

// SAVE need button to save to local storage-
$(".saveBtn").on("click", function(){

    var key = $(this).prev().attr("id")
    var value = $(this).prev().val()

    // save to local storage
    localStorage.setItem(key, value)
});






