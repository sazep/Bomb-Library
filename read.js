let file = localStorage.getItem("filebook")
file = "../book/" + file
const count = 1700
let page = 0
let allbooks

function load_text() {
    fetch(file)
        .then((res) => res.text())
        .then((data) => {
            allbooks = data.length
            let s = page * count
            let n = s + count
            data = data.slice(s, n)
            const temp = $('#textbook').html();
            const hb_temp = Handlebars.compile(temp);
            $("#read").html(hb_temp(data));
            document.querySelector('.page').innerHTML = page + 1
        })
}
load_text()

let before = document.querySelector(".before")
let next = document.querySelector(".next")

function goToNextPage() {
    if (next.style.zIndex == 0) {
        if (page * count < allbooks) {
            page = page + 1
            load_text()
            before.style.zIndex = 0
        }
    }
    if ((page + 1) * count >= allbooks) {
        next.style.zIndex = -1
    }
}

function goToPreviousPage() {
    if (before.style.zIndex == 0) {
        if (page > 0) {
            page = page - 1
            load_text()
            next.style.zIndex = 0
        }
    }
    if (page == 0) {
        before.style.zIndex = -1
    }
}
// добавил перемещение с помощу стрелочек и букв чтоб не наводитсяs
next.addEventListener("click", goToNextPage)
before.addEventListener("click", goToPreviousPage)

document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowRight" || event.code == "KeyD") {
        goToNextPage()
    }
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        goToPreviousPage()
    }
})


document.addEventListener("mousemove",function(mouse){
    let x = mouse.pageX
    let y = mouse.pageY
    let Dx = window.innerWidth/2-x
    let Dy = window.innerHeight/2-y
    let angelY = 20*Dy/window.innerHeight/2
    let angelX = 20*Dx/window.innerWidth/2
    let read = document.querySelector(".read")
    read.style.transform = `rotateX(${angelY}deg)rotateY(${angelX}deg)`
})