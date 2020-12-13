let imagensWrap = document.querySelectorAll('#aprender .imagem');
let imagens = document.querySelectorAll('#aprender img:not(.espacamento)');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -60% 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            imagens.forEach(function(element) {
                element.classList.add("visivel");
            });          
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

imagensWrap.forEach(imagem => {
    appearOnScroll.observe(imagem);
});