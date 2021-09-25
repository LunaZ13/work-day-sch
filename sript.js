// displays current day and time
var currentDay = moment().format("MMM Do YYYY")
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT")
$("#currentTime").append(currentTime);

$(document).ready(function () {
    // adds event listener to saveBtn
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(text, time);
        // save to local storage
        localStorage.setItem(time, text);
    })
    // gets items saved in local storage
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    // function for current hour
    function timeTracker() {
        var currentHour = moment().hour();
        // if else statements to for color coding
        $(".time-block").each(function () {
            var blockTime = $(this).attr("id");
            // will add class color depending on time 
            if (blockTime < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime == currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    timeTracker();
})