let book
fetch('/data/data.json')
    .then(response => response.json())
    .then(books => {
        book = localStorage.getItem("id")
        for (let bb of books){
            if (bb ["id"] == +book){
                book = bb
                break
            }
        }

        const temp = $('#aboutbook').html();
        const hb_temp = Handlebars.compile(temp);
        $("#book").html(hb_temp(book));

        const filledStars = '★'.repeat(book.mark)
        const unfilledStars = '☆'.repeat(10 - book.mark)
        document.getElementById('filled-stars').textContent = filledStars
        document.getElementById('unfilled-stars').textContent = unfilledStars
    })
const count = 3
let page = 0
function load_books(){
    fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => {
            let s = page*count 
            let n = s+3
            data = data.slice(s,n)
            const temp = $('#similbook').html();
            const hb_temp = Handlebars.compile(temp);
            $("#similar-book").html(hb_temp(data));
        })
        .then((abc)=>{
            document.querySelector('.downbook').addEventListener("click",()=>{
                const file = book["file"]
                const down = document.createElement("a")
                down.setAttribute("download", file)
                down.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(file)}`)
                down.style.display = "none"
                document.body.appendChild(down)
                down.click()
                document.body.removeChild(down)
            })
            document.querySelector('.readbook').addEventListener("click",()=>{
                localStorage.setItem("filebook", book['file'])
                window.location.href = "read.html"
            })
        })
    }
load_books()