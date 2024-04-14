const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

showSlide(currentSlide);
