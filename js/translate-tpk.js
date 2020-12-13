$(document).ready(function(){

    let page = window.location.href;
    
    if(page.match(/\?en/)) {
        translate();

        $('nav a[href="index.html#sobre"]').attr('href', 'index.html?en#sobre');
        $('nav a[href="index.html#projetos"]').attr('href', 'index.html?en#projetos');
        $('nav a[href="index.html#hobbies"]').attr('href', 'index.html?en#hobbies');
        $('nav a[href="index.html#contato"]').attr('href', 'index.html?en#contato');
    }

    function translate() {

        // Intro ---------------------------------
        // ---------------------------------------

        // Texto
        $('#intro p').html("TPK is a gaming miniatures store with a heavy focus on user experience. It's the coming togheter of two of my greatest passions: maker culture and RPGs, fueled by my burning hatred of the typical gaming miniature shopping experience.<br><br>This was the biggest project of my life, and made me develop a bunch of skills, from UI/UX and front end development, to branding and business management. The website and all the logistical side of things are ready, and I plan on releasing it on january 2021.");

        //Links
        $('#intro a').eq(0).text("The website (on a development server)");
        $('#intro a').eq(0).text("The project on Figma");



        // O Problema ---------------------------------
        // --------------------------------------------

        // Título
        $('#problema h1').text("The problem");

        // Intro
        $('#problema .p1').text("What made me want to start this project was the bad experience of shopping in other stores. After some market research, evaluating many gaming minaitures stores in and out of Brazil, I observed some common problems.");

        // Lista
        $('#problema .i1 h4').text("Vague categorization");
        $('#problema .i1 p').text("Products divided in inefficient categories, making it hard to find for a specific type of product.");

        $('#problema .i2 h4').text("Lack of real product photos");
        $('#problema .i2 p').text('Some product "photos" are actually just 3D renders, leaving the users wondering about the real products characteristics.');

        $('#problema .i3 h4').text("Hidden information");
        $('#problema .i3 p').text('Hiding or not even including relevant information such and return and shipping policies.');

        // Outro
        $('#problema .p2').text("These are only some of the most relevant topics, I listed much more stuff, such as phone-only customer support, requests for irrelevant personal info, amateurish visuals, etc.");



        // Desafios -----------------------------------
        // --------------------------------------------

        // Título
        $('#desafios h1').text("Challanges");

        // Título
        $('#desafios p').html(`During the design phase, I didn't have a clue about HTML, CSS, PHP and javascript coding. My plan was to use a wordpress sitebuilder.<br><br>It quickly became aparent, however, that the site builder would be too restrictive to implement the website as I had designed it. So I decided to study some HTML/CSS, and eventually PHP. After some days of studying, I began working a <a href='warlock.html'>little (at first) side project</a> to synthesize this new knowledge. When I came back to this project, I was ready to face this challing.<br><br>My biggest difficulties in this process were "fighting" with the default Woocommerce (Wordpress' ecommerce platform) javascript, performance optimizations, and accessibility, given that I was learning how to code while I developed the website.`);



        // Divertida -----------------------------------
        // ---------------------------------------------

        // Título
        $('#divertida h1').html("Turning the browsing experience into <span>something fun</span>");

        // Texto
        $('#divertida p').html("One of the tools I used to create the best possible browsing experience was to make the very interaction with the elements on the page into something fun and pleasing.<br><br>The search filters tab, for example -- on most other stores, these filters are just checkboxes, which not only look ugly, but also make it difficult to search for a specific filter, because they all look the same.<br><br>My solution for this problem was creating different buttons for each filter. Big, bulky, extremely satisfying to click buttons, which you can see there on the side.");

        // More info
        $('#divertida h4').html(`To read more about my design decisions, <a href="tpk-ctd.html">click here</a>.`);



        // O que pode melhorar -----------------------------------
        // -------------------------------------------------------

        // Título
        $('#melhorar h1').html("What can be improved");

        // Texto
        $('#melhorar h2').eq(0).html("Refactoring");
        $('#melhorar p').eq(0).html("I'm pretty happy with this project, at least in the design department, but my inexperince with coding left a lot of technical debt behind, which I plan on solving eventually, now that I have a lot more knowledge in this area than when I wrote my first lines of codes, a few months ago.");

        $('#melhorar h2').eq(1).html("Responsiveness");
        $('#melhorar p').eq(1).html("The other problem I plan on solving in the future is responsiveness. At the moment, the website is adaptive, with 3 breakpoints (desktop, tablet and mobile), thanks, again, to my inexperience at the beginning of the project. This was a design decision, as I didn't really trust my ability to code a fully responsive website, but now I know I'm pretty capable of doing that.");

        $('#melhorar h2').eq(2).html("Correct usage of grids");
        $('#melhorar p').eq(2).html("I actually feel a little embarrassed to write this, but I designed the whole website using grids, because that's something I've always done in any interface design. However, when I began this project, I was not aware that grids are a CSS element, so, even though the whole design uses grids, on my CSS I did everything manually with paddings, marins, flexbox and absolute positioning.");

        $('#melhorar h2').eq(3).html("Data analysis and feedback");
        $('#melhorar p').eq(3).html("As I mentioned at the beginning, the website isn't live yet, so there is still a lot of data to be analyzed, and feedback to be collected.");

    }
  
});