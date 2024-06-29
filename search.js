let input = document.getElementById('search')

let filter_book

$("#search").on("keyup", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        let txt = input.value
        fetch("../data/data.json")
            .then((res) => res.json())
            .then((data) => {
                filter_book = []
                for (let bb of data) {
                    if (bb["name"].includes(txt) || bb["author"].includes(txt)) {
                        filter_book.push(bb)
                    }
                }
                localStorage.setItem("filterbook", JSON.stringify(filter_book))
                window.location.href = "../html/filter_book.html"
            })
    }
})