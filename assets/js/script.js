// Display current day and date

var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);


// attempt to change color-- StackOverflow help; doesn't work

var currentHour = moment().hour();


function applyClass () {

    var d = new Date();
    var n = d.getHours();
    switch(true) {
        case (n < currentHour) :
            $(this).addClass('past');
            break;
        case (n === currentHour) :
            $(this).addClass('present');
            break;
        default:
            $(this).addClass('future');
    }
};

applyClass();




// SAVE need button to save to local storage- NEEED HELP
$(".saveBtn").on("click", function(){
    // how do I select the unmade text area and save the time slot
    var key = $(this).text.value 
    var value= $(this).attr().value

    // save to local storage
    localStorage.setItem(key, value)

});


// WHen I refresh the page, then the saved text persists

localStorage.getItem(key);
function savedDate() {
    $
};


