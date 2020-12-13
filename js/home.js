$(document).ready(function(){

    let currentPage = window.location.href.match(/#.*$/);

    if(currentPage) { // Se o URL mencionar uma sessão específica, "liga" as sessões linkadas

        $(`a[href="${currentPage}"]`).addClass('active'); // "liga" o item correspondente no nav
        $(`${currentPage}`).addClass('active'); // "liga" a sessão correspondente

    } else { // Se não tiver nenhuma menção na URL, "liga" o sobre mim

        $('nav a').addClass('active');
        $('#sobre').addClass('active');

    }


    /////// ----------------------------------------------
    // Transições do menu
    /////// ----------------------------------------------

    $('nav a').on('click', function() {
        $('nav .active:not(.lang)').removeClass('active');
        $(this).addClass('active'); // Tira a classe active do item antigo e bota no novo
        
        sectionID = $(this).attr('href');

        $('main').fadeOut(100);
        setTimeout(() => {

            $('section.active').removeClass('active');

            if(sectionID == '#projetos') {

                $('.projetos-sect').each(function() {
                    $(this).css({width: '0'});
                    $(this).removeClass('active');
                });

                $('main').fadeIn(100, function() {

                    if($('nav').hasClass('active')) {

                        $('nav ul').removeClass('active');
                        $('nav').removeClass('active');  

                    }

                    $(`${sectionID}`).addClass('active');

                });

                let projetosInterval = setInterval(() => {
                    if($('.projetos-sect:not(.active)').length) {
                        $('.projetos-sect:not(.active)').eq(0).css({width: '100%'});
                        $('.projetos-sect:not(.active)').eq(0).addClass('active');
                    } else {
                        clearInterval(projetosInterval);
                    }
                    
                }, 100);

            } else {

                $('main').fadeIn(100, function() {

                    if($('nav').hasClass('active')) {

                        $('nav ul').removeClass('active');
                        $('nav').removeClass('active');  

                    }

                    $(`${sectionID}`).addClass('active');

                });

            }
            
            
        }, 101);

    });

    /////// ----------------------------------------------
    // Troca de página pelo scroll
    /////// ----------------------------------------------

    var userScrolled = false;
    let evento;

    $(window).bind('mousewheel', function(event) {
        userScrolled = true;
        evento = event;
    });

    setInterval(function() {
        if (userScrolled) {

            currentPage = $('nav .active').parent();

            if (evento.originalEvent.wheelDelta >= 0) {
                currentPage.prev().find('a').trigger('click');
            }
            else {
                currentPage.next().find('a').trigger('click');
            }


            userScrolled = false;
        }
    }, 700);

    /////// ----------------------------------------------
    // Imagens da página de hobbies
    /////// ----------------------------------------------

    let thumbIndex;
    $('.hobby-thumb').on('click', function() {
        thumbIndex = $(this).index();

        $('.bigger-images').fadeIn(100, function() {
            $(this).css({display: 'flex'});
            $(this).addClass('active');

            $(this).find('img').eq(thumbIndex).addClass('active');
        });

    });

    $('.bigger-images button').on('click', function() {

        if($(this).hasClass('next-img')) {
            thumbIndex = thumbIndex + 1;

            if(thumbIndex > $('.hobby-thumb').length) {
                thumbIndex = 1
            }

        } else {
            thumbIndex = thumbIndex - 1;

            if(thumbIndex < 1) {
                thumbIndex = 9
            }

        }
        

        $('.bigger-images img.active').removeClass('active');
        $('.bigger-images img').eq(thumbIndex).addClass('active');
    });

    function closeBiggerImages() {
        if($('.bigger-images').hasClass('active')) {

            $('.bigger-images').removeClass('active');
            $('.bigger-images img.active').removeClass('active');

            $('.bigger-images img.active').fadeOut(100);
            $('.bigger-images').fadeOut(100);

        }
    };

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.img-arrow').length) {
            closeBiggerImages();
        }
    });

    $('body').keyup(function(e){
        if(e.key == 'Escape'){
            closeBiggerImages();
        }
    });
  
});