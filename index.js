fetch("/data/new.json")
    .then((res)=>res.json())
    .then((data)=>{
        const temp = $("#book").html()
        const htTemp = Handlebars.compile(temp)
        $("#new").html(htTemp(data))
    })

fetch("/data/popular.json")
    .then((res)=>res.json())
    .then((data)=>{
        const temp = $("#book").html()
        const htTemp = Handlebars.compile(temp)
        $("#popular").html(htTemp(data))
    })

const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
let currentIndex = 0;
const intervalTime = 5000

function showSlide(index) {
    if (index >= slideImages.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slideImages.length - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

slideImages.forEach(slide => {
    slide.addEventListener('click', () => {
        const link = slide.getAttribute('data-link');
        window.location.href = link;
    });
});

function startSlider() {
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, intervalTime);
}

showSlide(currentIndex);
startSlider();