function set() {
    const img = document.querySelector('#main-img');

    anime.set(img, {
        scale: 0
    });

    var bioSection = document.querySelector('#bio');

    anime.set(bioSection, {opacity:0})

}

function animate() {

    const img = document.querySelector('#main-img');

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the image using anime.js when it comes into view
                anime({
                    targets: img,
                    scale: 1, // Zoom in to the original size
                    duration: 2000, // Animation duration in milliseconds
                    easing: 'easeInOutQuad' // Animation easing function
                });
            }
        });
    });

    observer.observe(img);


    var bioSection = document.querySelector('#bio');
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


    const carouselContainer = document.querySelector('#main-carousel-container');

    observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('#main-carousel').owlCarousel({
                    loop:true,
                    autoWidth:true,
                    autoplay:true,
                    autoplayTimeout:5000,
                    autoplayHoverPause:false,
                    center:true,
                    dots:false,
                });
                anime({
                    targets: carouselContainer,
                    opacity: [0, 1],
                    duration: 2000,
                    easing: 'easeInOutQuad',

                });

                observer1.disconnect();
            }
        });
    });

    observer1.observe(carouselContainer);


    const reviewContainer = document.querySelector('#review-container');

    observer2 = new IntersectionObserver(handleIntersection);

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: reviewContainer,
                    translateX: ['-100%', 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
                observer2.disconnect()
            }
        });
    }

    observer2.observe(reviewContainer);


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
}

set()

$(document).ready(function(){
    animate()
});