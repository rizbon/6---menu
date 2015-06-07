
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
    
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
   
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('ol > li:last-child > a').removeClass('active');
        $('ol > li:first-child > a').addClass('active');
        $('#slider ul').animate({
            left: + slideWidth
        }, 400, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('ol > li:first-child > a').removeClass('active');
        $('ol > li:last-child > a').addClass('active');
        
        $('#slider ul').animate({left: - slideWidth}, 400, 
            function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
        
    });

    $('a.control_next').click(function () {
        moveRight();
    
        
    });
    
});    


