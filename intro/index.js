let nextSlide = document.querySelector('.next-slide')
let prevSlide = document.querySelector('.prev-slide')

let slides = document.querySelectorAll('.slides')
let slideCounter = 0;

nextSlide.onclick = function () {
    slides[slideCounter].style.display = 'block';
    slideCounter = slideCounter == slides[slideCounter].length - 1 ? slides[slideCounter].length - 1 : slideCounter + 1;
}

prevSlide.onclick = function () {
    slideCounter = slideCounter == 0 ? 0 : slideCounter - 1;
    slides[slideCounter].style.display = 'none';
}