const count = 3
let page = 0
let allbooks
function load_books(){
    fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => {
            allbooks = data.length
            let s = page*count 
            let n = s+3
            data = data.slice(s,n)
            const temp = $('#onebook').html();
            const hb_temp = Handlebars.compile(temp);
            $("#allbooks").html(hb_temp(data));
            document.querySelector(".page").innerHTML = page + 1
        })
        .then((res) =>{
            let books = document.querySelectorAll(".onebook")
            for (let bb of books){
                bb.addEventListener("click", function(){
                    let id = this.querySelector(".id").innerHTML
                    localStorage.setItem("id", id)
                    window.location.href = "../html/aboutbook.html"
                })
            }
        })
}
load_books()
let before = document.querySelector(".before")
let next = document.querySelector(".next")
next.addEventListener("click", ()=>{
    if (page*count < allbooks){
        page = page + 1
        load_books()
        before.style.zIndex = 0
    }
    if ((page + 1) * count > allbooks){
        next.style.zIndex = -1
    }
})
before.addEventListener("click", ()=>{
    if (page > 0){
        page = page - 1
        load_books()
        next.style.zIndex = 0
    }
    if (page == 0){
        before.style.zIndex = -1
    }
})





















