$(function() {

$('.computer').on('click', function(){
  $('.open-icon').addClass('d-flex');
  $('.open-icon').removeClass('d-none');
});

$('.computer-close').on('click', function(){
  $('.open-icon').addClass('d-none');
  $('.open-icon').removeClass('d-flex');
});

})

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;

function appendZero(value) {
    return "0" + value;
}

function theTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString("en-US");
}

if (day < 10) {
    day = appendZero(day);
}

if (month < 10) {
    month = appendZero(month);
}

today = day + "." + month + "." + today.getFullYear();

document.getElementById("date").innerHTML = today;

var myVar = setInterval(function () {
    theTime();
}, 1000);
