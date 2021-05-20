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

    $('nav a').on('click', function() {

        if ($('nav').hasClass('active')) {
            $('nav').removeClass('active');
            $('nav ul').removeClass('active');
        }

    });

    let page = window.location.href;
    
    if(page.match(/\?en/)) {
        $('nav .languages a:first-child').addClass('active');
    } else {
        $('nav .languages a:last-child').addClass('active');
    }
  
});