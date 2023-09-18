const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;
let intervalId;

function nextSlide() {
    slides[slideIndex].classList.remove("active");
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add("active");
}

prevButton.addEventListener("click", () => {
    slides[slideIndex].classList.remove("active");
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].classList.add("active");
});

nextButton.addEventListener("click", () => {
    nextSlide();
});

intervalId = setInterval(nextSlide, 3000);

slider.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
});

slider.addEventListener("mouseleave", () => {
    intervalId = setInterval(nextSlide, 3000);
});

// Inicializar el primer slide
slides[slideIndex].classList.add("active");
