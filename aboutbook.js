fetch('/data/data.json')
    .then(response => response.json())
    .then(books => {
        let book = localStorage.getItem('id')
        for(let bb of books){
            if(bb['id']== +book){
                book = bb
                break
            }
        }
        const temp = $('#aboutbook').html()
        const htTemp = Handlebars.compile(temp)
        $("#bookk").html(htTemp(book))
        const filledStars = '★'.repeat(book.mark)
        const unfilledStars = '☆'.repeat(10 - book.mark)
        document.getElementById('filled-stars').textContent = filledStars
        document.getElementById('unfilled-stars').textContent = unfilledStars
    })
    .catch(error => console.error('Ошибка загрузки данных:', error))

fetch("/data/data.json")
    .then((res)=>res.json())
    .then((data)=>{
        const temp = $("#book").html()
        const htTemp = Handlebars.compile(temp)
        $("#new").html(htTemp(data))
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
}
load_books()