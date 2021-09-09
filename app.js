// Constants
const container = document.querySelector('.container');
const addBook = document.querySelector("#add");
const errorBox = document.querySelector('.error');




// Library
let myLibrary = [];


class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }


    static removeBook(element) {
    
        
        if (element.classList.contains('deleteBtn')) {
            element.parentElement.parentElement.remove()
        }

}

}

// UI
class UI {

    static displayBooks(){

        const book = new Book(`Harry Potter and the Philosopher's Stone`, 'J. K. Rowling', 223);

         UI.addBookToLibrary(book);

    }

    static addBookToLibrary(book){

        if (book.title === '' || book.author === '' || book.pages === '') {

            errorBox.innerHTML = `<p>Please enter book title, author and the number of pages</p>`;

        } else {

            myLibrary.push(book)

            container.innerHTML += `
                <div class="card"> 
                <div class="details">
                <h2>Title</h2>
                <p>${book.title}</p>
                <h2>Author</h2>
                <p>${book.author}</p>
                <h2>Pages</h2>
                <p>${book.pages}</p>
                <img src="img/delete_black_24dp.svg" class="deleteBtn" alt="">
                </div>
                </div>`;
        }

    }

    static clearForm() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
    }
}



// Display Stored Books
document.addEventListener('DOMContentLoaded', UI.displayBooks())

//Add book to UI/Array
addBook.addEventListener('click', (e) => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    const book = new Book(title, author, pages);

    UI.addBookToLibrary(book);

    UI.clearForm();
});

// Remove Book
document.querySelector('.container').addEventListener('click', (e) => {
    Book.removeBook(e.target);
});




