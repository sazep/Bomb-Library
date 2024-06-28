let input = document.getElementById("search")
let all_books

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let txt = input.value
        fetch("/data/data.json")
            .then((res) => res.json())
            .then((data) => {
                let filter_book = []
                for (let bb of data) {
                    if (bb["name"].includes(txt) || bb["author"].includes(txt)) {
                        filter_book.push(bb)
                    }
                }
                all_books = filter_book.length
                const temp = $('#onebook').html();
                const hb_temp = Handlebars.compile(temp);
                $("#allbooks").html(hb_temp(filter_book));
                document.querySelector(".page").innerHTML = page + 1
            })
    }
}).then((res) => {
    let books = document.querySelectorAll(".onebook")
    for (let bb of books) {
        bb.addEventListener("click", function () {
            let id = this.querySelector(".id").innerHTML
            localStorage.setItem("id", id)
            window.location.href = "../html/aboutbook.html"
        })
    }
})
load_books()
let before = document.querySelector(".before")
let next = document.querySelector(".next")
next.addEventListener("click", () => {
    if (page * count < allbooks) {
        page = page + 1
        load_books()
        before.style.zIndex = 0
    }
    if ((page + 1) * count > allbooks) {
        next.style.zIndex = -1
    }
})
before.addEventListener("click", () => {
    if (page > 0) {
        page = page - 1
        load_books()
        next.style.zIndex = 0
    }
    if (page == 0) {
        before.style.zIndex = -1
    }
})