function toggleMenu() {
    const isActive = document.getElementById("menu-button").classList.toggle("is-active")
    const menu = document.getElementById("menu-container");

    if (isActive) {
        menu.classList.remove("animate__bounceOut");
        menu.classList.add("animate__flipInY");
    } else {
        menu.classList.remove("animate__flipInY");
        menu.classList.add("animate__bounceOut");
    }

    if (menu.classList.contains("hidden")) {
        // Show the menu with animation
        document.body.style.overflow = 'hidden';
        menu.classList.remove("hidden");
    } else {
        // Hide the menu with animation
        document.body.style.overflow = 'auto';
    }
}

function bioNext(caller) {
    document.getElementById("bio-next").classList.remove("hidden");
    document.getElementById("bio-next-button").remove()
}

function animate(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // const carousel = entry.target.querySelector(".gallery-carousel");
            // if (carousel !== null && entry.boundingClientRect.top > 0) {
            //     $(carousel).owlCarousel({
            //         singleItem: true,
            //         loop: true,
            //         center: true,
            //         items: 1,
            //         dots: true,
            //         lazyLoad: true,
            //         onInitialized: function () {
            //             carousel.classList.remove("!hidden");
            //             entry.target.classList.remove("notransition");
            //         }
            //     });
            //     observer.unobserve(entry.target);
            // } else {
            //     entry.target.classList.remove("notransition")
            //     observer.unobserve(entry.target);
            // }
            entry.target.classList.remove("notransition")
            observer.unobserve(entry.target);

        }
    })
}

const observer = new IntersectionObserver(animate);

document.querySelectorAll(".animate__animated").forEach((el) => {
        el.classList.add("notransition")
        observer.observe(el);
    }
)


$(document).ready(function(){
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

    $('#main-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        center: true,
        dots:false,
        margin: 0,
        singleItem: true,
        responsiveClass: true,
        responsive : {
            0: {
                items: 2
            },
            768: {
                items:3
            },
            1800: {
                items: 4
            }
        }
    });

    $(".gallery-carousel").owlCarousel({
        singleItem: true,
        loop: true,
        center: true,
        items: 1,
        dots: true,
        lazyLoad: true,
        //lazyLoadEager: 2,
    });

    $("#new-carousel").owlCarousel({
        stagePadding: 25,
        singleItem: true,
        center:true,
        loop:true,
        items: 1,
        dots: true,
        autoHeight:true,
    });
});




