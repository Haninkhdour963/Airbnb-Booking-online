document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderContent = document.querySelector('.slider-content');
    const slides = sliderContent.querySelectorAll('img');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        sliderContent.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    });
});
