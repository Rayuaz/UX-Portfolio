$(document).ready(function(){

    let currentPage = window.location.href.match(/#.*$/);

    if(currentPage) { // Se o URL mencionar uma sessão específica, "liga" as sessões linkadas

        $(`a[href="${currentPage}"]`).addClass('active'); // "liga" o item correspondente no nav
        $(`${currentPage}`).addClass('active'); // "liga" a sessão correspondente

    } else { // Se não tiver nenhuma menção na URL, "liga" o sobre mim

        $('nav a').eq(0).addClass('active');
        $('#sobre').addClass('active');

    }


    /////// ----------------------------------------------
    // Transições do menu
    /////// ----------------------------------------------

    $('nav a:not(.lang)').on('click', function(e) {

        e.preventDefault();

        sectionID = $(this).attr('href');

        $(sectionID)[0].scrollIntoView({behavior: 'smooth'});

    });

    /////// ----------------------------------------------
    // Transições do durante o scroll
    /////// ----------------------------------------------

    let windowHeight = $(window).height();

    let lastScroll = 0;

    let projetosIndexados = false;

    $(window).on('scroll', function() {        

        let top = $(this).scrollTop();

        if (!projetosIndexados && top >= (windowHeight / 4)) { // Transição da seção de projetos

            let projetos = [];

            $('.projetos-sect').each(function(index) {
                projetos[index] = $(this);
            });

            projetosIndexados = true;

            projetos[0].addClass('active');
            projetos.shift();

            let showProjetos = setInterval(() => {

                if(projetos.length) {

                    projetos[0].addClass('active');
                    projetos.shift();

                    console.log(projetos);

                } else {

                    clearInterval(showProjetos);

                }

            }, 300);

        }

        if (top > lastScroll) { // Se estiver scrollando pra baixo

            if (top < windowHeight) {

                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(0)').addClass('active');
                
            } else if (top >= windowHeight &&  top <= (windowHeight * 1.9)) {
    
                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(1)').addClass('active');
    
            }  else if (top >= (windowHeight * 1.9) &&  top <= (windowHeight * 2.9)) {
    
                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(2)').addClass('active');
    
            } else if (top >= (windowHeight * 2.9) &&  top <= (windowHeight * 3.9)) {
    
                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(3)').addClass('active');
    
            }

        } else { // Se estiver scrollando pra cima

            if (top <= (windowHeight / 2)) {

                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(0)').addClass('active');
                
            } else if (top >= windowHeight &&  top <= (windowHeight * 1.5)) {
    
                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(1)').addClass('active');
    
            }  else if (top >= (windowHeight * 1.5) &&  top <= (windowHeight * 2.5)) {
    
                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(2)').addClass('active');
    
            } else if (top >= (windowHeight * 2.5) &&  top <= (windowHeight * 3.5)) {
    
                $('nav a:not(.lang).active').removeClass('active');         
                $('nav').find('a:eq(3)').addClass('active');
    
            }

        }

        lastScroll = top;        

    });

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