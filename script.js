let myLibrary = [];

function Book(title, author, pages, read = false) { 
    this.id = crypto.randomUUID();
    this.title = title;    
    this.author = author;  
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

const book1 = new Book("football", "messi","10");

const book3 = new Book("Sapiens", "Yuval Noah Harari", 443);

const book4 = new Book("The Code Book", "Simon Singh", 432);

myLibrary.push(book1, book3, book4);

function addBooks(title, author, pages) {
     const book = new Book(title, author, pages);
     myLibrary.push(book);
     
}

function removeBook(get){
 myLibrary = myLibrary.filter(book => book.id !== get);
 displayBooks();
}

function displayBooks() {

    const container = document.getElementById('container-id');
    container.textContent = "";
  
    
for (const book of myLibrary) {

    const booksCard = document.createElement('div'); 
    booksCard.setAttribute('data-id', book.id);
    booksCard.classList.add('card');

    const titleDiv = document.createElement('div');
    titleDiv.textContent = `title: ${book.title}`;
    titleDiv.classList.add('title-class');
    booksCard.appendChild(titleDiv); 

    const authorDiv = document.createElement('div');
    authorDiv.textContent = `author: ${book.author}`;
    authorDiv.classList.add('author-class')
    booksCard.appendChild(authorDiv);

    const pageDiv = document.createElement('div');
    pageDiv.textContent = `pages: ${book.pages}`;
    pageDiv.classList.add('page-class');
    booksCard.appendChild(pageDiv); 

    const readButton = document.createElement('button');
        readButton.textContent = book.read ? "Read: YES" : "Read: NO"; 
        readButton.classList.add(book.read ? 'read-status-yes' : 'read-status-no');

        readButton.addEventListener('click', function() {
            book.toggleReadStatus();
            displayBooks(); 
        });
    booksCard.appendChild(readButton);

    const remove = document.createElement('button');
    remove.classList.add('submit');
    remove.textContent = "remove";
    booksCard.appendChild(remove);
    remove.addEventListener('click',function(){
    getID = booksCard.getAttribute('data-id');
    removeBook(getID);
    } );
   

    container.appendChild(booksCard);
}
}

displayBooks();

const form = document.getElementById('add-book-form');
form.addEventListener('submit', function(event){

    event.preventDefault();

    const title = document.getElementById('title');
    const titleValue = title.value;

    const author = document.getElementById('author');
    const authorValue = author.value;

    const pages = document.getElementById('pages');
    const pageValue = pages.value;

    addBooks(titleValue, authorValue, pageValue);
  
    displayBooks();
})