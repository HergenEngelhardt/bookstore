<div id="comments">${renderComments()}</div>










function renderComments(books) {
    let commentHTML = "";

    for (let iComment = 0; iComment < books.comments.length; iComment++) {
        commentHTML = getCommentsTemplate(books.comments[iComment]);
    }
    return commentHTML;
}