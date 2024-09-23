let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function changeContainer(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
