// MOMENT FOR THE CURRENT DAY AND TIME
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var timeGroup = $(".timeGroup")
// LOOP TO SET THE COLORS
for (let i = 0; i < timeGroup.length; i++) {
    
var hora =  moment().hour();  
console.log(hora)
var elementTime = parseInt($(timeGroup[i]).attr("id"))
if(elementTime === hora){
    $(timeGroup[i]).children(".form-control").addClass("present")
}
if(elementTime < hora){
    $(timeGroup[i]).children(".form-control").addClass("past")
}
if(elementTime > hora){
    $(timeGroup[i]).children(".form-control").addClass("future")
}
}

var x = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < x.length; i++) {
    var dataHora = localStorage.getItem(x[i]);
    $(".form-control" + x[i]).val(dataHora);
}
//SAVE INFO TO LOCAL STORAGE ON A CLICK EVENT
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This is working");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

// THIS TASK I DID WITH THE HELP OF LEIGH TRACEY - TA