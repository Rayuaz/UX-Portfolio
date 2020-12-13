$(document).ready(function(){

    let page = window.location.href;
    
    if(page.match(/\?en/)) {
        translate();
        
        $('#tpk').attr('href', 'tpk.html?en');
        $('#warlock').attr('href', 'warlock.html?en');
        $('#taverna').attr('href', 'taverna.html?en');
    }

    function translate() {

        // Sobre ---------------------------------
        // ---------------------------------------

        $('#sobre h1').text("Hi, I'm Alan!");
        $('#sobre h3').text("Designer, Developer, and Maker");
        $('#sobre p').text("I'm 23 years old, living in Curitiba - Brazil, and have a bachelor's degree in design by UTFPR. My area of expertise is UI/UX, but I'm also proficient in HTML/CSS, javascript, and know some PHP (mostly for Wordpress). I also know my way around digital retouching, prototyping, video editing, bread making, and pottery. I have an extremely agitated mind, ease of learning, and I'm constantly developing new skills for solving new challanges.");

        // Hobbies -------------------------------
        // ---------------------------------------

        // Left column
        $('#hobbies .left-col p').html("Thanks to my hyperactivity, I get very fixated on some very random stuff, and ended up acquiring a bunch of hobbies throughout my life. You can the results of some of these endeavours in this page<br><br>There isn't a lot here yet because I don't usually ahive my hobbies, but I intend on populating this page in the future.");

        // Thumbnails
        $('#hobbies .overlay p').eq(0).text('A diorama I made for a college project.');
        $('#hobbies .overlay p').eq(1).text('I started learning 3D sculpting at the beginning of 2020 but had to pause it to focus on more pressing matters.');
        $('#hobbies .overlay p').eq(2).text('Ceramic cup inspired by Juggernaut from Dota 2.');
        $('#hobbies .overlay p').eq(3).text('A little mimic salt pot.');
        $('#hobbies .overlay p').eq(4).text("My first miniatures painted in oils. It's still missing some highlights, but I'm pretty glad with the results so far.");
        $('#hobbies .overlay p').eq(5).text('My first painted miniatures. Far from a good result, we all have to start somewhere.');
        $('#hobbies .overlay p').eq(6).text('Me, on a low-quaity cosplay of Royan Machado de Tinta, the dwarven barbarian, the character I played on a college D&D campaign.');
        $('#hobbies .overlay p').eq(7).text("A map of the world I'm creating for my D&D campaign.");
        $('#hobbies .overlay p').eq(8).text('Leather journals I made for the players at my D&D campaign.');

        // Contato -------------------------------
        // ---------------------------------------

        // Contato
        $('#contato h1').eq(0).text('Contact me');

        // Links
        $('#contato a h3').eq(0).text('Linkedin');
        $('#contato a h3').eq(1).text('Source code for this website');
        $('#contato a h3').eq(2).text('Repository with a few old projects');

    }
  
});