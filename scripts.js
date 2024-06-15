const menu = document.querySelector('.menu')
const NavMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    NavMenu.classList.toggle('ativo')
})


//Galerry

let currentSlide = 0
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressBar = document.querySelector('.progress');

function showSlide(n){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active')
    updateProgessBar()
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
}

function previousSlide(){
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide)
}

function updateProgessBar(){
    const progress = (currentSlide + 1) / totalSlides * 100;
    progressBar.style.width = progress + '%'
}

showSlide(currentSlide)

updateProgessBar();