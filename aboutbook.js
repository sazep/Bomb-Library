let book
let comments = []
fetch('../data/data.json')
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
    fetch("../data/data.json")
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
                const file = '../book/'+book["file"]
                const down = document.createElement("a")
                down.setAttribute('href', file)
                down.setAttribute('download', book['file'])
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

// коментарии
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form')
    const commentTextArea = document.getElementById('comment-text-area')
    const userCommentsLists = document.getElementById('user-comments-lists')
    const commentTemplateScript = document.getElementById('comment-template').innerHTML
    const commentTemplate = Handlebars.compile(commentTemplateScript)
    
    let comments = {}
    const currentBookId = getCurrentBookId()
    comments[currentBookId] = loadCommentsFromLocalStorage(currentBookId)

    renderComments()

    commentForm.addEventListener('submit', addComment)

    function addComment(event) {
        event.preventDefault()

        const newComment = {
            name: 'Anonymous',
            timeBack: new Date(),
            comment: commentTextArea.value,
            timeAgo: getTimeAgo(new Date())
        }
        
        comments[currentBookId].unshift(newComment)
        commentTextArea.value = ''

        saveCommentsToLocalStorage(currentBookId, comments[currentBookId])

        renderComments()
    }

    function renderComments() {
        const html = commentTemplate(comments[currentBookId])
        userCommentsLists.innerHTML = html
    }

    function getTimeAgo(commentDate) {
        const currentDate = new Date()
        const diffInSeconds = Math.floor((currentDate - commentDate) / 1000)

        if (diffInSeconds < 60) {
            return 'несколько секунд назад'
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60)
            return `${minutes} ${getNoun(minutes, ['минуту', 'минуты', 'минут'])} назад`
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600)
            return `${hours} ${getNoun(hours, ['час', 'часа', 'часов'])} назад`
        } else {
            const days = Math.floor(diffInSeconds / 86400)
            return `${days} ${getNoun(days, ['день', 'дня', 'дней'])} назад`
        }
    }

    function getNoun(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2]
        return titles[
            number % 100 > 4 && number % 100 < 20
                ? 2
                : cases[number % 10 < 5 ? number % 10 : 5]
        ]
    }

    function saveCommentsToLocalStorage(bookId, comments) {
        localStorage.setItem(`comments_${bookId}`, JSON.stringify(comments))
    }

    function loadCommentsFromLocalStorage(bookId) {
        const commentsString = localStorage.getItem(`comments_${bookId}`)
        if (commentsString) {
            const comments = JSON.parse(commentsString)
            comments.forEach(comment => {
                comment.timeBack = new Date(comment.timeBack) // Преобразуем строку обратно в объект Date
            })
            return comments
        } else {
            return []
        }
    }

    function getCurrentBookId() {
        book = localStorage.getItem("id")
        // clearCommentsFromLocalStorage(book)
        return book
    }

    // есле написал что-то не то в книге ожно удалить
    function clearCommentsFromLocalStorage(bookId) {
        const key = `comments_${bookId}`
        localStorage.removeItem(key)
    }
    
    setInterval(updateTimeAgo, 60000)

    function updateTimeAgo() {
        const currentDate = new Date();
        comments[currentBookId].forEach(comment => {
            comment.timeAgo = getTimeAgo(new Date(comment.timeBack));
        });
    
        renderComments();
        saveCommentsToLocalStorage(currentBookId, comments[currentBookId]);
    }
    
})