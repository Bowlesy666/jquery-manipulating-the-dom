$(document).ready(function() {
  $("#stream1_btn").click(function() {        // i like this
    $(".stream1").removeClass('highlight_stream');
    $(".stream2").removeClass('highlight_stream');
    $(".stream3").removeClass('highlight_stream');
    $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
    $(".stream1").removeClass('highlight_stream');
    $(".stream2").removeClass('highlight_stream');
    $(".stream3").removeClass('highlight_stream');
    $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
    $(".stream1").removeClass('highlight_stream');
    $(".stream2").removeClass('highlight_stream');
    $(".stream3").removeClass('highlight_stream');
    $(".stream3").addClass('highlight_stream');
   });
}); 

$('img');
$('.card_image');
$('#my-footer');
$('#my-footer p');
$('.header');
$('div:first');
$('div:last');
$('img:last');
$('a');