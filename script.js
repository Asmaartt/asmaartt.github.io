function toggleMenu() {
    document.getElementById("menu-button").classList.toggle("is-active")
    const menu = document.getElementById("menu-container");
    if (menu.classList.contains("hidden")) {
        // Show the menu with animation
        document.body.style.overflow = 'hidden';
        anime({
            targets: menu,
            opacity: [0, 0.9],
            //height: "100vh",
            duration: 250,
            easing: 'easeOutQuad'
        });
        menu.classList.remove("hidden");
    } else {
        // Hide the menu with animation
        document.body.style.overflow = 'auto';
        anime({
            targets: menu,
            opacity: [0.9, 0],
            //height: 0,
            duration: 250,
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
        dots:false,
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
        dots:false,
    });

    $(".gallery-carousel").owlCarousel({
        singleItem: true,
        loop:true,
        center:true,
        items: 1,
        dots: true,
    });


});