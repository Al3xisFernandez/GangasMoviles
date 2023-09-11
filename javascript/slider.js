let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

const interval = 3000; 

function autoRotate() {
    nextSlide();
}

let autoRotation = setInterval(autoRotate, interval);

prevBtn.addEventListener('click', () => {
    clearInterval(autoRotation);
    autoRotation = setInterval(autoRotate, interval);
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoRotation);
    autoRotation = setInterval(autoRotate, interval);
});

showSlide(currentSlide);
