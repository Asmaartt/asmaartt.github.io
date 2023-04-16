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
            entry.target.classList.remove("notransition")

            observer.unobserve(entry.target)
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
        autoWidth:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        center:true,
        dots:false,
    });

    $(".gallery-carousel").owlCarousel({
        singleItem: true,
        loop:true,
        center:true,
        items: 1,
        dots: true,
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




