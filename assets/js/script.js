// Display current day and date

var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);


// attempt to change color-- StackOverflow help; doesn't work
// function getHours() {
var currentHour = parseInt(moment().format('HH'));
// };

// currentHour = moment().hour();
// console.log(currentHour);
var idArr = [8,9,10,11,12,13,14,15,16,17,18,19]
for(i=8; i<idArr.length + 8; i++){
    // console.log($("#text"+i))
    // console.log(idArr[i-8])
    // console.log(currentHour)
    if(idArr[i-8] < currentHour){
        // console.log("past")
        $("#text"+i).attr("class","col-md-10 past")
    }else if(idArr[i-8] == currentHour){
        // console.log("present")
        $("#text"+i).attr("class","col-md-10 present")
    }else {
        // console.log("future")
        $("#text"+i).attr("class","col-md-10 future")
    }

    $("#text"+i).val(localStorage.getItem("text"+i))
}

// function applyClass () {

//     var d = new Date();
//     var n = d.getHours();
//     switch(true) {
//         case (n < currentHour) :
//             $(this).addClass('past');
//             break;
//         case (n === currentHour) :
//             $(".hour").addClass('present');
//             break;
//         default:
//             $(".hour").addClass('future');
//     }
// };


// applyClass();




// SAVE need button to save to local storage- NEEED HELP
$(".saveBtn").on("click", function(){
    // how do I select the unmade text area and save the time slot
    // var key = $(this).text[i].value.trim
    // var value= $(this).attr().value

    var key = $(this).prev().attr("id")
    var value = $(this).prev().val()

    // save to local storage
    localStorage.setItem(key, value)

});


// WHen I refresh the page, then the saved text persists

// alert(localStorage.getItem(key));

function savedDate() {
    $
};


