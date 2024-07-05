// let input = document.querySelector('.search')
// $('#search').on('keyup', function(e){
//     if (e.key === 'Enter' || e.keyCode === 13) {
//         let text = input.value
//         fetch("/data/data.json")
//         .then((res) => res.json())
//         .then((data) => {
//             let filter_book = []
//             for (let bb of data) {
//                 if (bb.name.includes(text) || bb.author.includes(text)) {
//                 filter_book.push(bb)
//                 }
                
//             }
//             localStorage.setItem('filter_book',JSON.stringify(filter_book))
//             window.location.href='filter_book.html'
//         })
//     }
// }) 
let input = document.getElementById('search')

let filter_book

$("#search").on("keyup", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        let txt = input.value.trim().toLowerCase()
        fetch("https://sazep.github.io/Loogik-Library/data/data.json")
            .then((res) => res.json())
            .then((data) => {
                filter_book = []
                let regex = new RegExp(txt, "i") // ТиПа ВОТак оНо Все Равно СчиТаЕт 
                for (let bb of data) {
                    if (regex.test(bb["name"].toLowerCase()) || regex.test(bb["author"].toLowerCase()) || regex.test(bb["genre"].toLowerCase())) {
                        filter_book.push(bb)
                    }
                }
                localStorage.setItem("filterbook", JSON.stringify(filter_book))
                window.location.href = "https://sazep.github.io/Loogik-Library/html/filter_book.html"
            })
    }
})