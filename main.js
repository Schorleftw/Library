let myLibrary = [];


// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// add new method to the prototype of the Book constructor
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary(title, author, pages, read) {
    return myLibrary.push(new Book(title, author, pages, read));
}

// example user input
addBookToLibrary("yikes", "Björn", "300", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkin", "295", "not read yet");

// console.log(myLibrary[0].info());