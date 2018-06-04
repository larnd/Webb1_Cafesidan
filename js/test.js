$(document).ready(function(){
  var topposition = $(this).offset();
  $('.menuButton').click(function(){
    $('.meny').animate({'left':'0px'},250);
  });

  $('.closeButton').click(function(){
    $('.meny').animate({'left':'-250px'},250);
  });

});
