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
        $('#intro p').html(`Taverna is a "deck" of character sheets ready for use on Dungeons & Dragons 5e (D&D) one-shots, with the goal of reducing the time it takes to prepare a game session. Each sheet has a character, with it's stats and background. The cards are printed in laminated card stock, making them dry-erasable for making notes and keep track of cantantly changing values, such as health points and spell slots. In the video below you can see what comes inside the box.<br><br>This project was developed togheter with my colleague, Camila Matsuda, for our undergraduate thesis, with orientation by Rodrigo Graça and Pamela Henriques. Camila designed the characters and I designed the layout of the cards.<br><br>In case you want to read more about this project, you can read our thesis (in portuguese) by <a href="https://drive.google.com/file/d/1i09fSYLx_P1KDqOffVgz7CRuTpVOkMlw/view?usp=sharing">clicking here</a>.`);



        // Aprender ---------------------------------
        // ---------------------------------------

        // Título
        $('#aprender h1').eq(0).text("Learning to play D&D is easy");
        $('#aprender h1').eq(1).text("...Kind of");

        // Texto
        $('#aprender p').eq(0).text("D&D is a hobby that has been growing a lot recently, and is more accessible than ever, but still looks quite complex for someone who has never experienced it.");

        $('#aprender h2').text("And that's because of the character creation process*");

        $('#aprender p').eq(1).text("Character creation in D&D involves some (basic) math, and an overload of information that can scare off new players.");
        $('#aprender p').eq(2).text("*This is obviously not the only reason, but is a big contribuitor to the problem.");



        // Pratico ---------------------------------
        // ---------------------------------------

        // Título
        $('#pratico h1').text("Practical, fast, and intuitive");

        // Texto
        $('#pratico p').text(`Our solution was a "deck" of ready to use character sheets, on A5 size, portable enough to be taken anywhere, and printed in dry-erasable card stock, so that players' notes can be erased and the sheets can be reused for future sessions.`);



        // Perfeito ---------------------------------
        // ---------------------------------------

        // Título
        $('#perfeito h1').text("Perfect for beginners");

        // Texto
        $('#perfeito p').text(`Taverna is ideal for new players who don't know if they want to make the commitement of joining a new hobby yet. All you have to do is choose a character and start playing!`);



        // Desafios ---------------------------------
        // ---------------------------------------

        // Título
        $('#desafios h1').text("Challanges");

        // Lista
        $('#desafios h2').eq(0).text("Space");
        $('#desafios p').eq(0).text("In the beginning of the project, we analyzed many character sheets available on the internet, and it became clear that it would be a challange to fit all of the relevant information in the very limited space of a card. Our goal, at first, was to use tarot cards, but after a few failed attempts to make a wireframe work on such a tiny workspace, we decided to try a bigger medium, in the A5 size, and we also divided the content in two separate cards: one with the character stats, and another with the character background.");

        $('#desafios h2').eq(1).text("The search for the ideal gray");
        $('#desafios p').eq(1).text(`Another challange was to reach the ideal gray for the layout. Since there's a lot of information to be displayed on not a lot of space, I tried to "lighten" the composition using gray to frame each section, reducing the visual weight of the layout. But getting to the ideal gray took quite a lot of time and iteration.`);

        $('#desafios h2').eq(2).text("Spell casters");
        $('#desafios p').eq(2).text(`Spell caster characters were particularly challanging, and I still don't think I found the ideal solution for them. These character have a special rule in the game, which allows them to cast spells. These spells add a huge load of new information, extremely disproportionate to all other characters. We managed solve this problem for the only spell caster character we developed, but I don't believe our current layout would work for all of them.`);

    }
  
});