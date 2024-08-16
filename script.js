function init(){
    renderBooks();
}
//
function renderBooks() {
    let bookRef = document.getElementById('book_info')
    bookRef.innerHTML += "";

    for (let iBook = 0; iBook < books.length; iBook++) {
        bookRef.innerHTML += getBooktemplate(books[iBook], iBook)  
        renderComments(iBook);
    }
    
}

function renderComments(iBook) {
    let commentRef = document.getElementById(`book_comments${iBook}`);
    commentRef.innerHTML = "";

    let currentBook = iBooks;
    if (currentBook.comment.length === 0){
        commentRef.innerHTML = "<p>Sei der erste Kommentar</p>"
    } else{
    for (let iComment = iBook.comments.length - 1;
        iComment >= 0;
        iComment --
    ) {
        commentRef.innerHTML = getCommentsTemplate(iComment, currentBook);
    }}
}



function addUser() {
    let userInputRef = document.getElementById('add_username');
    let userInput = userInputRef.value;
    
    books.push(userInput);

    renderComments();

    userInput.value = "";
}

function addComment() {
    let commentInputRef = document.getElementById('add_comment');
    let commentInput = commentInputRef.value;
    
    books.push(commentInput);

    renderComments();

    commentInput.value = "";
}
