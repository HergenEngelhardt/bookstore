// add books
function getBooktemplate(iBook) {
    return ` <br><div class="book_name"IB
                <h2>${iBook.name}</h2>
        </div>
            <img src="./assets/img/book.png">
            <p>Autor: ${iBook.author}</p>
            <p>Genre: ${iBook.genre}</p>
            <p>Preis: ${iBook.price}</p>
            <p>Erscheinungsjahr: ${iBook.publishedYear}</p>
            <p>Gefällt mir Angaben: ${iBook.likes}</p>
            <div id="book_comments${iBook}">
            </div>
            <div id="new_comments">
            <input id="add_username" placeholder="Benutzername" type="text" required><input id="add_comment" placeholder="Ihr Kommentar" type="text">
            <button id="submit_comment" type="submit" onclick="addUser(), addComment()">Kommentar einfügen</button>
        </div>`;
}

// add comments
function getCommentsTemplate(iComment, currentBook){
    return `
    <tr>
        <td><b>${currentBook.comments[Icomment].name} : </b></td>
        <td>${currentBook.comments[Icomment].comment}</td>
    </tr>
    `;
}
