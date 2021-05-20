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

        // Nav -----------------------------------
        // ---------------------------------------

        $('a[href="index.html#sobre"]').text("About me");
        $('a[href="index.html#projetos"]').text("Projects");
        $('a[href="index.html#contato"]').text("Contact & Links");

        // Intro ---------------------------------
        // ---------------------------------------

        // Texto
        $('#intro p').html("Warlock's Book Stock is a repository of spells for Dungeons & Dragons 5e (D&D). There you can search for all the D&D spells available in the open license, switch between metric and imperial measurement units, and create grimoires.<br><br>This was, at first, supposed to an exercise in translanting a physical card layout which I had already made a few months prior, into a digital medium. It would be just a nice little exercise in HTML, CSS and PHP, but I ended up extrapolating the original idea and creating a whole spell repository.<br><br>After a month of work, I thought better to resume the work on the <a href='tpk.html'>project that originated this exercise</a>, but I plan on release it in early 2021.");



        // Problema ---------------------------------
        // ------------------------------------------

        // Título
        $('#problema h1').html("Creating spell casting characters in D&D is pretty laborious");

        // Texto
        $('#problema p').html("D&D has more than 500 spells, spread across 5 books. Creating a spell casting character in the traditional way is a pretty daunting task, and keeping track of all these spells is even scarier.");



        // Features ---------------------------------
        // -----------------------------------------

        // Título
        $('#features h1').html("More than a repository");

        // Lista
        $('#features h4').eq(0).html("Grimoires");
        $('#features p').eq(0).html("Keep track of your characters' spells and level ups.");

        $('#features h4').eq(1).html("Editable content");
        $('#features p').eq(1).html("Create your own spells, and share them with the community!");

        $('#features h4').eq(2).html("Metric system");
        $('#features p').eq(2).html("Switch between metric and imperial units at will.");

        $('#features h4').eq(3).html("Printable content");
        $('#features p').eq(3).html("Pay what you want to download a printable PDF of your grimoires.");



        // Desafios ---------------------------------
        // ------------------------------------------

        // Título
        $('#desafios h1').html("Challanges");

        // Texto
        $('#desafios p').html("This was a very challenging project on a technical point of view, as was to be expected.<br><br>The grimoire system took a few thousands lines of PHP and javascript to work, but I'm pretty satisfied with the results.<br><br>On the design side, dealing with the visual chaos of displaying hundreds of spells at the same time was a pretty big challange too, and one I'm not 100% satisfied with my solution.");



        // O que pode melhorar ---------------------------------
        // -----------------------------------------------------

        // Título
        $('#melhorar h1').html("What can be improved");

        // Lista
        $('#melhorar h2').eq(0).html(`Grimoire interaction`);
        $('#melhorar p').eq(0).html(`Currently, the way you add a spell to your grimoire, is by clicking the card to expand it. This is the action used to read the contents of the spell. A better solution to this problem without chaning the layout of the card would be to add an "add to grimoire" button that appears on hover.`);

        $('#melhorar h2').eq(1).html(`Individual pages`);
        $('#melhorar p').eq(1).html(`Some spells have a lot of text, and the layout of the cards is not exactly ideal for the kind of reading. This layout exists because of the limitations of the physical medium that I used as a basis for this project, but on a digital medium, it would be ideal to add a button to view the spell on it's own dedicated page. This would also make it easier to share spells.`);

        $('#melhorar h2').eq(2).html(`Data analysis and feedback`);
        $('#melhorar p').eq(2).html(`As I mentioned at the beginning, the website isn't live yet, so there is still a lot of data to be analyzed, and feedback to be collected.`);

    }
  
});