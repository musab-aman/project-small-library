let myLibrary = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;   
    this.author = author; 
    this.pages = pages; 

}


function addBooks(title, author, pages) {
     const book = new Book(title, author, pages);
     myLibrary.push(book);

}

function displayBooks() {

    const container = document.getElementById('container-id');
    container.textContent = "";

    for (const book of myLibrary) {
    const booksCard = document.createElement('div');
    booksCard.setAttribute('id', book.id);
    booksCard.classList.add('card');

    const titleDiv = document.createElement('div');
    titleDiv.textContent = `title: ${book.title}`;
    titleDiv.classList.add('title-class');
    bookscard.appendChild(titleDiv);

    const authorDiv = document.createElement('div');
    authorDiv.textContent = `author: ${book.author}`;
    authorDiv.classList.add('author-class')
    bookscard.appendChild(authorDiv);

    const pageDiv = document.createElement('div');
    pageDiv.textContent = `pages: ${book.pages}`;
    pageDiv.classList.add('page-class');
    bookscard.appendChild(pageDiv);

    container.appendChild(booksCard);
}
}