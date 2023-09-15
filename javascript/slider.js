// let currentSlide = 0;
// const slides = document.querySelectorAll('.slider img');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// // function showSlide(n) {
// //     slides[currentSlide].classList.remove('active'); // Quita la clase 'active' de la imagen actual
// //     currentSlide = (n + slides.length) % slides.length;
// //     slides[currentSlide].classList.add('active'); // Agrega la clase 'active' a la nueva imagen
// //     slides[currentSlide].style.display = 'none';
// //     currentSlide = (n + slides.length) % slides.length;
// //     slides[currentSlide].style.display = 'block';
    
// //     /* ... Tu código JavaScript existente ... */
    
// // }

// // function prevSlide() {
// //     showSlide(currentSlide - 1);
// // }

// // function nextSlide() {
// //     showSlide(currentSlide + 1);
// // }
// function showSlide(n) {
//     slides[currentSlide].classList.remove('active'); // Quita la clase 'active' de la imagen actual
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active'); // Agrega la clase 'active' a la nueva imagen
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }


// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// const interval = 3000; 

// function autoRotate() {
//     nextSlide();
// }

// let autoRotation = setInterval(autoRotate, interval);

// prevBtn.addEventListener('click', () => {
//     clearInterval(autoRotation);
//     autoRotation = setInterval(autoRotate, interval);
// });

// nextBtn.addEventListener('click', () => {
//     clearInterval(autoRotation);
//     autoRotation = setInterval(autoRotate, interval);
// });

// showSlide(currentSlide);

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
    slides[currentSlide].classList.remove('active'); // Quita la clase 'active' de la imagen actual
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active'); // Agrega la clase 'active' a la nueva imagen
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

// Mostrar la primera imagen al cargar la página
showSlide(currentSlide);

