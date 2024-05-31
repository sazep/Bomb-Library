let bookData = {
    id: '0',
    cover: 'test.jpg',
    title: 'Название книги или сайта хз или вообще хедер как говорится дальше больше',
    genre: 'Роман',
    authors: 'Иван Иванов, Анна Петрова',
    age: '18+',
    pages: '1000',
    language: 'Русский',
    date: '15 ноября 2014',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit urna ut aliquam consequat.',
    rating: 4.5,
    similarBooks: [
        { src: 'test.jpg', title: 'Рекомендованная книга 1' },
        { src: 'test.jpg', title: 'Рекомендованная книга 2' },
        { src: 'test.jpg', title: 'Рекомендованная книга 3' },
        { src: 'test.jpg', title: 'Рекомендованная книга 4' },
        { src: 'test.jpg', title: 'Рекомендованная книга 5' }
    ]
}

function loadBook() {
    document.getElementById('book-cover').src = bookData.cover
    document.getElementById('book-cover').onerror = function(){document.getElementById('book-cover').src='Error.jpg'}
    document.getElementById('book-title').textContent = bookData.title
    document.getElementById('book-genre').textContent = bookData.genre
    document.getElementById('book-authors').textContent = bookData.authors
    document.getElementById('book-age').textContent = bookData.age
    document.getElementById('book-pages').textContent = bookData.pages
    document.getElementById('book-id').textContent = bookData.id
    document.getElementById('book-language').textContent = bookData.language
    document.getElementById('book-date').textContent = bookData.date
    document.getElementById('book-description').textContent = bookData.description

    let filledStars = Math.floor(bookData.rating)
    let unfilledStars = 5 - filledStars

    document.getElementById('filled-stars').textContent = '★'.repeat(filledStars)
    document.getElementById('unfilled-stars').textContent = '★'.repeat(unfilledStars)

    let similarBooksContainer = document.getElementById('similar-books')
    bookData.similarBooks.forEach(book => {
        let bookDiv = document.createElement('div')
        let img = document.createElement('img')
        console.log(img.src)
        img.src = book.src
        img.onerror = function(){img.src='Error.jpg'}
        img.alt = 'Обложка рекомендованной книги'

        bookDiv = document.createElement('h')
        bookDiv.textContent = book.title

        bookDiv.appendChild(img)
        similarBooksContainer.appendChild(bookDiv)
    })
}

function wrapText(tag) {
    let textarea = document.getElementById('comment-text')
    let start = textarea.selectionStart
    let end = textarea.selectionEnd
    let selectedText = textarea.value.substring(start, end)
    let wrappedText = `[${tag}]${selectedText}[/${tag}]`

    textarea.setRangeText(wrappedText, start, end, 'end')
    textarea.focus()
}

document.querySelector('.comment-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let commentText = document.getElementById('comment-text').value
    alert('Комментарий отправлен: ' + commentText)
    document.getElementById('comment-text').value = ''
})

document.addEventListener('DOMContentLoaded', function() {
    loadBook()
})