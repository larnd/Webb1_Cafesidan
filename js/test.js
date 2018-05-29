$(document).ready(function(){
  $('.menuButton').click(function(){
    $('.meny').animate({'left':'0px'},1000);
  });

  $('.closeButton').click(function(){
    $('.meny').animate({'left':'-250px'},1000);
  });
});
