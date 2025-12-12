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
