const count = 3
let page = 0
let numPage = document.querySelector(".page")
let before = document.querySelector(".before")
let next = document.querySelector(".next")
let blockNext = false
function load_books(){
    fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => {
           
           if(page*count>= data.length){
            next.style.color = "#757575"
            blockNext = true
           }else{
            next.style.color = "#D1C4E9"
            blockNext = false
           }
            
            let s = page*count 
            let n = s+3
            data = data.slice(s,n)
            const temp = $('#onebook').html();
            const hb_temp = Handlebars.compile(temp);
            $("#allbooks").html(hb_temp(data));
            numPage.innerHTML = page+1
        })
        .then((dt)=>{
            let books = document.querySelectorAll(".onebook")
        for(let bb of books){
            bb.addEventListener("click",function(){
                let id = this.querySelector("p").innerHTML
                localStorage.setItem("book",id)
                window.location.href = "../html/aboutbook.html"
              
            })

        }
        })
}
load_books()

before.addEventListener("click",()=>{
    if (page > 0){
        page = page -1
        load_books()
    }
})

next.addEventListener("click",()=>{
    if (blockNext==false){
    page = page + 1
    load_books()
    before.style.color = "#D1C4E9"
    }
})