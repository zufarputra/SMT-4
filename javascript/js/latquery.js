// A $( document ).ready() block.
// $( document ).ready(function() {
//     console.log( "ready!" );
// });


$(function() {
    $("#isi").html("<h1>Belajar Jquery</h1>");
    $("button").click(function (e) { 
        e.preventDefault();
        alert("belajar");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
        console.log("mouse");
    });
});