let file = localStorage.getItem("filebook")
file = "../book/" + file
const count = 5000
let page = 0
let allbooks
function load_text(){
    fetch(file)
        .then((res) => res.text())
        .then((data) => {
            allbooks = data.length
            let s = page*count 
            let n = s+count
            data = data.slice(s,n)
            const temp = $('#textbook').html();
            const hb_temp = Handlebars.compile(temp);
            $("#read").html(hb_temp(data));
            document.querySelector('.page').innerHTML = page+1
        })
    }
load_text()
let before = document.querySelector(".before")
let next = document.querySelector(".next")
next.addEventListener("click", ()=>{
    if (page*count < allbooks){
        page = page + 1
        load_text()
        before.style.zIndex = 0
    }
    if ((page + 1) * count > allbooks){
        alert((page + 1) * count)
        next.style.zIndex = -1
    }
})
before.addEventListener("click", ()=>{
    if (page > 0){
        page = page - 1
        load_text()
        next.style.zIndex = 0
    }
    if (page == 0){
        before.style.zIndex = -1
    }
})
