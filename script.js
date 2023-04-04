function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        // Show the menu with animation
        anime({
            targets: menu,
            opacity: [0, 0.9],
            duration: 500,
            easing: 'easeOutQuad'
        });
        menu.classList.remove("hidden");
    } else {
        // Hide the menu with animation
        anime({
            targets: menu,
            opacity: [0.9, 0],
            duration: 500,
            easing: 'easeInQuad',
            complete: function() {
                menu.classList.add("hidden");
            }
        });
    }
}

$(document).ready(function(){
    $('#main-carousel').owlCarousel({
        loop:true,
        autoWidth:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        center:true,
    });

    $('#review-carousel').owlCarousel({
        loop:true,
        autoWidth:true,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:false,
        center:true,
        items: 1,
        autoHeight:true,
    });

    $('.gallery-carousel').owlCarousel({
        singleItem: true,
        autoWidth:true,
        loop:true,
        center:true,
        items: 1,
        dots: true,

    });
});