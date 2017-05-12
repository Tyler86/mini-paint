$(document).ready(function(){
var color = 'white'
var colors ='red blue green yellow white';
  $('.box').on('click', function() {
      $(this).addClass(color);
  })

  $('.box').on('dblclick', function(){
      $(this).removeClass(colors);
  })
  $('#reset').on('click', function(){
    $('.box').removeClass(colors);
  })
$('#red').on('click', function(){
  color='red';
})
$("#yellow").on('click', function(){
  color = 'yellow';
})
$("#green").on('click', function(){
color = 'green';
})

$("#white").on('click', function(){
color='white';
})

$("#blue").on('click', function(){
color='blue';
})




})
