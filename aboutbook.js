window.onload = function() {
    fetch('bookData.json')
        .then(response => response.json())
        .then(data => {
            initializeBook(data);
        })
        .catch(error => console.error('Error fetching book data:', error));
}

function initializeBook(bookData) {
    let filledStars = '★'.repeat(Math.floor(bookData.rating));
    let unfilledStars = '☆'.repeat(5 - Math.floor(bookData.rating));
    document.getElementById('filled-stars').textContent = filledStars;
    document.getElementById('unfilled-stars').textContent = unfilledStars;

    let similarBooksContainer = document.getElementById('similar-books');
    bookData.similarBooks.forEach(book => {
        let bookDiv = document.createElement('div');
        let bookImg = document.createElement('img');
        bookImg.src = book.src;
        bookImg.onerror = function() {
            this.src = "Error.jpg";
        }
        bookImg.alt = book.title;

        bookDiv.appendChild(bookImg);
        similarBooksContainer.appendChild(bookDiv);
    });

    let similarBooksTextContainer = document.getElementById('similar-books-text');
    bookData.similarBooks.forEach(book => {
        let bookDiv = document.createElement('div');
        let bookText = document.createElement('p');
        bookText.textContent = book.title;

        bookDiv.appendChild(bookText);
        similarBooksTextContainer.appendChild(bookDiv);
    });
}

document.querySelector('.comment-form').addEventListener('submit', function(aboba) {
    aboba.preventDefault();
    let commentText = document.getElementById('comment-text').value;

    let commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    let avatarDiv = document.createElement('div');
    avatarDiv.className = 'comment-avatar';
    let avatar = document.createElement('img');
    avatar.src = 'avatar.jpg'
    avatar.alt = 'Avatar';
    avatarDiv.appendChild(avatar);

    let commentDetails = document.createElement('div')
    commentDetails.className = 'comment-details'

    let usernameDiv = document.createElement('div')
    usernameDiv.className = 'comment-username'
    usernameDiv.textContent = 'Ghost'

    let timeDiv = document.createElement('div');
    timeDiv.className = 'comment-time';
    let formattedTime = new Date().toLocaleString('ua-UA', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    timeDiv.textContent = formattedTime;

    let commentTextDiv = document.createElement('div')
    commentTextDiv.className = 'comment-text'
    commentTextDiv.innerHTML = commentText

    let actionsDiv = document.createElement('div')
    actionsDiv.className = 'comment-actions'
    let replySpan = document.createElement('span')
    replySpan.textContent = 'Ответить'
    let likeSpan = document.createElement('span')
    likeSpan.textContent = '👍'
    let dislikeSpan = document.createElement('span')
    dislikeSpan.textContent = '👎'

    actionsDiv.appendChild(replySpan)
    actionsDiv.appendChild(likeSpan)
    actionsDiv.appendChild(dislikeSpan)

    commentDetails.appendChild(usernameDiv)
    commentDetails.appendChild(timeDiv)
    commentDetails.appendChild(commentTextDiv)
    commentDetails.appendChild(actionsDiv)

    commentDiv.appendChild(avatarDiv)
    commentDiv.appendChild(commentDetails)

    document.querySelector('.existing-comments').appendChild(commentDiv)
    document.getElementById('comment-text').value = ''
})