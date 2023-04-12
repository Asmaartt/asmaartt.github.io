function set() {
    var bioSection = document.querySelector('#gallery-text');
    anime.set(bioSection, {opacity:0})

    const galleryItems = document.querySelectorAll('.gallery-item');

// Set initial CSS properties for the gallery items
    anime.set(galleryItems, {
        opacity: 0, // start with zero opacity
        translateY: '100px' // move down 100px
    });

}

function animate() {
    var bioSection = document.querySelector('#gallery-text');
    var bioAnimation = anime({
        targets: bioSection,
        opacity: [0, 1],
        translateY: [100, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        autoplay: false
    });

    function handleBioAnimation() {
        var bioSectionPosition = bioSection.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (bioSectionPosition.top < windowHeight * 0.9) {
            bioAnimation.play();
            window.removeEventListener('scroll', handleBioAnimation);
        }
    }

    window.addEventListener('scroll', handleBioAnimation);


    const form = document.querySelector('#contact-form');
    const fields = form.querySelectorAll('input, textarea');

// Hide the form initially
    anime.set(form, {opacity: 0, translateY: '50px'});

// Hide the form elements initially
    anime.set(fields, {opacity: 0, translateX: '-50px'});

    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: form,
                    translateY: ['100%', '0%'],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 1500,
                    delay: 500,
                    autoplay: true
                });

                anime({
                    targets: fields,
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 1000,
                    delay: anime.stagger(100, {start: 500}),
                    autoplay: true
                });
                observer3.unobserve(form);
            }
        });
    });

    observer3.observe(form);


    const galleryItems = document.querySelectorAll('.gallery-item');

// Create an intersection observer to detect when the gallery items come into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the gallery item using Animate.js when it comes into view
                anime({
                    targets: entry.target,
                    opacity: 1, // fade in
                    translateY: 0, // move up to original position
                    duration: 1000, // Animation duration in milliseconds
                    easing: 'easeOutQuad' // Animation easing function
                });

                $(entry.target.querySelector(".gallery-carousel")).owlCarousel({
                    singleItem: true,
                    autoWidth:true,
                    loop:true,
                    center:true,
                    items: 1,
                    dots: true,
                });

                // Stop observing the gallery item after it's been animated
                observer.unobserve(entry.target);
            }
        });
    });

// Observe each gallery item
    galleryItems.forEach(item => {
        observer.observe(item);
    });

}

set()

$(document).ready(function(){

    const loadingPage = document.querySelector("#loading-page");
    anime({
        targets: loadingPage,
        opacity: [1, 0],
        //translateY: "-100%",
        easing: 'easeInOutQuad',
        duration: 2000,
        autoplay: true,
        complete: function() {
            loadingPage.remove();
            animate()
        }
    });
});


