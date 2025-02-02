
//-------------------------------------------------------Navbar scroll-------------------------------------------------------//

var itemContainer1 = document.getElementById("itemContainer1");
var itemContainer2 = document.getElementById("itemContainer2");
var itemContainer3 = document.getElementById("itemContainer3");
var itemContainer4 = document.getElementById("itemContainer4");
var itemContainer5 = document.getElementById("itemContainer5");
if (itemContainer1) {
    itemContainer1.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='frameContainer']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
if (itemContainer2) {
    itemContainer2.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='ourMission']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
if (itemContainer3) {
    itemContainer3.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='ourProducts']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
if (itemContainer4) {
    itemContainer4.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='ourServices']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
if (itemContainer5) {
    itemContainer5.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='contactUs']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}

//-------------------------------------------------------Carousal-------------------------------------------------------//
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const slides = carousel.querySelectorAll('.container1');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize first slide
    updateSlides();
    dots[0].classList.add('opacity-100');

    // Function to update slides
    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.opacity = '1';
                slide.style.zIndex = '1';
            } else {
                slide.style.opacity = '0';
                slide.style.zIndex = '0';
            }
        });

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('opacity-100', index === currentSlide);
            dot.classList.toggle('opacity-50', index !== currentSlide);
        });
    }

    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
    }

    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlides();
    }

    // Event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlides();
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto advance slides every 5 seconds
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 8000);

//-------------------------------------------------------Mobile carousal-------------------------------------------------------//



