const dialog = document.querySelector('dialog');
const addBook = document.getElementById('addBook');
const closeDialog = document.getElementById('cancel');
const myLibrary = [];
let indexNumber = 0

// create book and add it to the library
function Book(title, author, release, read){
    this.title = title;
    this.author = author;
    this.release = release;
    this.read = read;
    this.index = undefined;
}
function addBookToLibrary(book){
    this.book.index = indexNumber;
    indexNumber++;
    myLibrary.push(book);
}

// dialog popup
addBook.addEventListener("click", () => {
    dialog.showModal();
});
closeDialog.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

