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

        // Home ---------------------------------
        // ---------------------------------------

        // Home
        $('#home p').eq(0).text("It's no obscure knowledge that the farther away something is to the fold, the less chance of of it being seen. With that in mind, I tried to keep the smallest possible vertical scroll on this page, so that the user can see all of the content without being overwhelmed with information.");

        // Hero
        $('#home h2').eq(0).text("Hero");
        $('#home p').eq(1).text("This section will be used to announce new collections and deals in the future, but during our soft launch, it's introducing the user to the function and mission of the store. I made sure to develop a system that allowed me to display text as an HTML element instead of keeping it on the image, for matters of accessibility and to keep the typography sharp.");

        // Promo da semana
        $('#home h2').eq(1).text("Deals of the week and featured products");
        $('#home p').eq(2).text(`Instead of habing different sections for "recent products", "best sellers" and other categories, I opted to display only the deals of the week (to keep the users coming back to the store periodically), and a section for "featured products", with tabs for each different product category. My goal with this decision was to save some vertical space, and make it easier for the user to find the content that interests them.`);

        // Mural da comunidade
        $('#home h2').eq(2).text("Community gallery");
        $('#home p').eq(3).text(`The community gallery grabs posts with a specific hashtag on instagram. On the product page, users are encouraged to post photos with their miniatures on instagram with this hashtag. The objective is to create community engagement, generate organic publicity, and to show real photos of the products sold on the store (due to the huge catalog, I can't print and photograph every model on the store, so I opted for 3D renders).<br><br>This section is the greatest reason why I wanted to keep the small vertical height. Because of the hierarchy of information, it wouldn't make much sense to place this section higher on the page, but it is still very relevant for this community engagement and real photos.`);



        // Catalogo ---------------------------------
        // ---------------------------------------

        // Catalogo
        $('#Catalogo h1').text("Catalogue");
        $('#Catalogo p').eq(0).text("This page was my focus during the design process. One the things I observed during muy research, is that the user experience of browsing through the models and, in special, looking for a specific category, in these traditional miniature stores, is awful. Most of the stores don't have a decent categorization system for their product, and/or have a terrible interface for displaying the search filters.<br><br>My objective with this page was precisely to make this browsing experience into something satisfying, that instigates the user to navigate though the products even without the intention of buying anything.");

        // Anatomia do card de produto
        $('#Catalogo h2').eq(0).text("Anatomy of the product card");
        $('#Catalogo p').eq(1).text("My first step in creating this ideal browsing experience was creating a product card that had all the necessary information while still being visually appealing.");

        // Imagem
        $('#Catalogo h4').eq(0).text("Image");
        $('#Catalogo p').eq(2).text(`In an eletronics store, for example, the product photo isn't very relevant because the user is normally browsing through the names and/or prices. In my case, however, the product is completely visual. There are no "specs" on the models, so the image is an extremely relevant factor for the user's choice, and that's why I chose to make the thumbnail image a little bigger than most other ecommerce websites.`);

        // Título
        $('#Catalogo h4').eq(1).text("Title");
        $('#Catalogo p').eq(3).text(`One of the things I observed is that the product title is an element completely ignored on most ecommerces. Usually, it's a font with normal weight, all caps, and more often than not, the layout doesn't even fit the entire title. Part of this problem, I assume, ie to the fact that most of these websites sell products made by third parties, with a big variation in title length. Since I have total control over the naming of my products, I felt I little more comfortable to use a more coherent and legible typography.`);

        // Variaões
        $('#Catalogo h4').eq(2).text("Variations");
        $('#Catalogo p').eq(4).text(`Currently, the store's catalogue has around 300 products, with over 1300 variations. Most of these products have a bunch of variations. If I were to display each variation as a separate product, the catalogue would be flooded by very similar products (this happens a lot on the websites I visited on my research). To avoid this chaos, I grouped all of the variations of each model into a single product, and during the browsing, the user can click on the buttons to see each variation.`);

        // Preço
        $('#Catalogo h4').eq(3).text("Price");
        $('#Catalogo p').eq(5).text(`The real product price, big and extra-bold. I see many ecommerce websites that only display the price of each installment, or the the "in cash" price, to make the product seem cheaper than it actually is. I don't agree with this business practice, and I tried to avoid these dark(ish) patterns.`);

        // Filtros
        $('#Catalogo h2').eq(1).text("Search filters");
        $('#Catalogo p').eq(6).text(`My biggest source of headaches during this project. This feature took a lot of PHP, which, as previously mentioned, I was not very knowledgeable about.<br></br>I wanted to create cool and captivating visuals for the filters menu. On most other ecommerces, these filters are only checkboxes with labels. These types of menu not only look ugly, but also make it harder to find the specific category of product you were looking for, because they all look the same.<br><br>My solution was to create different buttons for each type of filter. Big buttons, extremely satisfying to click on.<br><br>Other than the buttons, the very category system of the products is much more robust to accomodate relevant categories for each product, and I also implemented a product tag system, to group them by theme, appearence, etc.<br><br>Despite the different look, "behind the curtains" all of these buttons are nothing more than checkboxes with buttons for labels, to make sure they are accessible.`);



        // Página de produto ---------------------------------
        // ---------------------------------------

        // Catalogo
        $('#produto h1').text("Product page");
        $('#produto p').eq(0).text("This page was pretty challanging because of the ammount of info that needed to go above the fold.");

        // Galeria
        $('#produto h2').eq(0).text(`Gallery`);
        $('#produto p').eq(1).text(`One of the problems with miniature photos is that it's pretty hard to discern what are the real dimensions of that product. My solution to this problem started in the 3D render itself, where I included a grid on the "ground" of the image, where each square represents 1cm.<br><br>I also included the dimensions of the models as an overlay on the image. This overlay is an HTML element, meaning I can make changes to it without having to redo all my 3D renders, and when the user clicks to see the image in full size, I can hide the overlay, so that there are no distractions from the image.<br><br>Implementing this feature was a challange in both PHP and javascript, but will save me quite of lot of time I would otherwise spend adding these overlays manually through photoshop.`);

        // Prazo de produção
        $('#produto h2').eq(1).text(`Production time`);
        $('#produto p').eq(2).text(`The products on the store are sold on demand, so I took care during the whole design process to leave this information pretty explicit. This is made more evident on this section, but I also took care with the very copy writing of the website -- the world "store", for example, was replaced with "catalogue", and there's no mention of "buying" a product anywhere on the site.<br><br>On the back-end, each product is assigned a value of "days it takes to produce". This value is displayed on the product page, and then again on the cart and on the checkout, with the sum of all of the products' production times.`);

        // Variations
        $('#produto h2').eq(2).text(`Variations`);
        $('#produto p').eq(3).text(`This was the most critical part of the design on this page. I saw many bad examples of variable products in other ecommerces, specially on Ali Express, and even on the default behavior for Woocommerce. In these examples, the variations are not selected by default, the price is displayed as an interval (R$ 5,99 - R$ 19,99, for example), and the buy button is deactivated until the user chooses an option.<br><br>This is a problem, first, because it creates an unecessary ammount of clicks to add a product to the shopping cart, but mostly because it adds more information to an already overloaded page.<br><br>My solution was, firstly, add a variation selected by default. On top of that, I also placed this section under the add to cart button.<br><br>This, in my opinion (still has to be tested), improves the reding rythim of the page, because the first thing the user will probably see is the product title, then price, and the add to cart button, which are the most basicm necessary information for him to make a decision.`);

        // Dúvidas e comentários
        $('#produto h2').eq(3).text(`Questions and comments`);
        $('#produto p').eq(4).text(`This is another effort to make the whole process as transparent as possible. If the user has a question or complaint, they can post it directly on the product page, without having to send an email or enter in contact via phone`);

        // Community gallery
        $('#produto h2').eq(4).text(`Community Gallery`);
        $('#produto p').eq(5).text(`Different than the gallery on the front page, this section grabs a hashtag specific to the product. This way, the user can have an idea of how the final product actually looks, and can use these photos as inspiration for painting his miniature.`);



        // Pintores---------------------------------
        // ---------------------------------------

        $('#pintores h1').text("List of brazilian painters");
        $('#pintores p').text(`The models sols on the store are not painted, and I'm not confident on my skills as a painter to sell my services. But even though it is a "sub-hobby", painting miniatures is not for everyone and some people just want their painted miniatures to look cool on the table. WIth that in mind, I created a page with a list of brazilian miniature painters.<br><br>The goal of this page is to minimize the loss of potential customers that wanted painted miniatures, create a bond with the miniature painting community, and improve the store's SEO.<br><br>Currently, each card has the name of the painter, their location, contact information, and 4 examples of previous works. I aim to annoucen this list togheter with the soft launch of the store.`);

    }
  
});