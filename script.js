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

// function isElementAboveMiddle(rect) {
//     // Calculate the vertical position of the middle of the viewport
//     var viewportHeight = window.screen.availHeight;
//     var viewportMiddleY = viewportHeight / 2;
//
//     // Check if the top of the element is above the middle of the viewport
//     if (rect.top > viewportMiddleY) {
//         return true; // The top of the element is above the middle of the viewport
//     } else {
//         return false; // The top of the element is below the middle of the viewport or in the middle of the viewport
//     }
// }

function animate(entries, observer) {
    entries.forEach((entry) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
            const target = entry.target;

            // 1. Remove "invisible" (Tailwind class) so the element is rendered
            target.classList.remove("invisible");

            // 2. Remove "notransition" to allow the Animate.css classes to fire
            target.classList.remove("notransition");

            // 3. Stop observing this specific element to save performance
            observer.unobserve(target);

            // Note: We don't need to manually check for 'carousel' here anymore
            // because OwlCarousel is already initialized in $(document).ready()
        }
    });
}
// Configuration for the observer
const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
};

// Initialize the observer
const observer = new IntersectionObserver(animate, observerOptions);

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
            1500: {
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

    document.querySelectorAll(".animate__animated").forEach((el) => {
        // Ensure they have the 'notransition' class before observing
        // to prevent them from "flashing" before they are scrolled into view.
        el.classList.add("notransition");
        observer.observe(el);
    });

    // If there is a hash in the URL (e.g., #paint-cosmos)
    if (window.location.hash) {
        // 1. Decode the hash (handles %C3%A9 -> é)
        const targetId = decodeURIComponent(window.location.hash.substring(1));
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // 2. Kill the observer logic immediately for this item
            observer.unobserve(targetElement);

            // 3. Force visibility (remove ALL animation hurdles)
            targetElement.classList.remove("invisible", "notransition");
            targetElement.style.visibility = "visible"; // Backup for Tailwind invisible
            targetElement.style.opacity = "1";         // Backup for animate.css starting state

            // 4. Scroll with a slight delay to allow the DOM to "settle"
            setTimeout(() => {
                const yOffset = -80; // Adjust this based on your header height
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});
            }, 500);
        }
    }
});




