$(document).ready(function(){
  var topposition = $(this).offset();
  $('.menuButton').click(function(){
    $('.meny').animate({'left':'0px'},250);
  });

  $('.closeButton').click(function(){
    $('.meny').animate({'left':'-250px'},250);
  });

  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });
  
});
