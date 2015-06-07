$(function(){   

$('a.control_next').click(function() {
  
   $('ol > li:first-child > a').removeClass('active').addClass('control_prev');
    $('ol > li:last-child > a').removeClass('control_next').addClass('active'); 
   $('#anim').animate({
    
    left: "-920",
    
  }, 500, function() {
    
});
});

$('a.control_prev').click(function() {
   $('ol > li:first-child > a').removeClass('control_prev').addClass('active');
  $('ol > li:last-child > a').removeClass('active').addClass('control_next'); 

  $('#anim').animate({
    
    left: "0",
    
  }, 500, function() {
    
});
 
});

});

