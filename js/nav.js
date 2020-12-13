$(document).ready(function(){

    $('.hamburger').on('click', function() {

        if($('nav').hasClass('active')) {
    
            $('nav ul').removeClass('active');
            $('nav').removeClass('active');            
    
        } else {
    
            $('nav ul').addClass('active');
            $('nav').addClass('active');
    
        }
    
    });
  
});