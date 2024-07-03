let input = document.querySelector('.search')
$('#search').on('keyup', function(e){
    if (e.key === 'Enter' || e.keyCode === 13) {
        let text = input.value
        fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => {
            let filter_book = []
            for (let bb of data) {
                if (bb.name.includes(text) || bb.author.includes(text)) {
                filter_book.push(bb)
                }
                
            }
            localStorage.setItem('filter_book',JSON.stringify(filter_book))
            window.location.href='filter_book.html'
        })
    }
}) 