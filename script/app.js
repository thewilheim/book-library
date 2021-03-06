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
        this.id = Math.floor(Math.random() * 100);
    }


    static removeBook(element) {

        let index;

        for (let i = 0; i < myLibrary.length; i++) { 
           if(element.dataset.indexNumber == myLibrary[i].id) {
               index = i;
           }
        }

        if(element.classList.contains('deleteBtn')){ 
        myLibrary.splice(index, 1);
        element.parentElement.parentElement.remove();
        }
}

}

// UI
class UI {

    static displayBooks(){

        const book = new Book(`Harry Potter and the Philosopher's Stone`, 'J. K. Rowling', 223, 'Completed');

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
                <h2>Status</h2>
                <p>${book.read}</p>
                <img src="img/delete_black_24dp.svg" class="deleteBtn" alt="" data-index-number="${book.id}">
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
    let read = document.querySelector('input[name="read-status"]:checked').value;



    const book = new Book(title, author, pages, read);

    UI.addBookToLibrary(book);

    UI.clearForm();
});

// Remove Book
document.querySelector('.container').addEventListener('click', (e) => {
    Book.removeBook(e.target);
});




