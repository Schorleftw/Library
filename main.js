const addBook = document.querySelector(".addBook");
const cards = document.querySelector(".grid");
const submitButton = document.querySelector(".submit");

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

Book.prototype.changeRead = function() {
    if (this.read === "not read yet") {
        return this.read = "read";
    }
    else {
        return this.read = "not read yet"
    }
}

function addBookToLibrary(title, author, pages, read) {
    return myLibrary.push(new Book(title, author, pages, read));
}

function addToDom(titleName, authorName, numberOfPages, readStatus) {
        // für jedes Objekt im Array eine Card erstellen und die Klasse "card" adden
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        // Add a data-set attribute to associate the DOM elements with the object in the array
        newCard.dataset.id = myLibrary.length -1;

        // Erstellen der p Elemente
        const title = document.createElement("p");
        title.innerText = titleName

        const author = document.createElement("p");
        author.innerText = authorName

        const pages = document.createElement("p");
        pages.innerText = numberOfPages

        // Erstellen der Buttons
        const readButton = document.createElement("button");
        if (readStatus === "read") {
            readButton.classList.add("read")
        }
        else {
            readButton.classList.add("notRead");
        }
        readButton.innerText = readStatus;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";

        // Append the Div to the grid and the Elements to the Card
        cards.appendChild(newCard);
        newCard.append(title, author, pages, readButton, deleteButton);

        // Add Event Listener to Delete Button
        deleteButton.addEventListener("click", function removeFromDom() {
            myLibrary.splice(newCard.dataset.id);
            newCard.remove();
        });

        readButton.addEventListener("click", function changeStatus() {
            readButton.innerText = myLibrary[newCard.dataset.id].changeRead();

            if (readButton.className === "notRead") {
                readButton.className = "read"
            }
            else if (readButton.className === "read") {
                readButton.className = "notRead"
            }
        });
}

function openForm() {
    // activate overlay
    document.querySelector(".overlay").style.display = "block";
    // activate popup
    document.querySelector(".form-popup").style.display = "block";
}

function closeForm() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".form-popup").style.display = "none";
}

submitButton.addEventListener("click", function submit(e) {
    // When submit button is clicked grab the user input and pass it into the array and call addToDom()
    // Prevent default behavior of submit button
    e.preventDefault();
    const title = document.querySelector(".getTitle").value;
    const author = document.querySelector(".getAuthor").value;
    const pages = document.querySelector(".getPages").value;
    let read = "";

    if (document.querySelector(".checkbox").checked) {
        read = "read"
    }
    else {
        read = "not read yet"
    }

    addBookToLibrary(title, author, pages, read);
    addToDom(title, author, pages, read);
    closeForm();
});


addBook.addEventListener("click", openForm);


// example user input
// addBookToLibrary("yikes", "Björn", "300", "not read yet");
// addBookToLibrary("The Hobbit", "J.R.R Tolkin", "295", "not read yet");

// addToDom();

//addBook.addEventListener("click", addToDom);

// console.log(myLibrary[0].info());
// console.log(myLibrary[0].title);