const dialog = document.querySelector('dialog');
const addBook = document.getElementById('addBook');
const closeDialog = document.getElementById('cancel');
const getForm = document.getElementById('confirm');
const table = document.querySelector('table');

let myLibrary = [];
let indexNumber = 0

// create book and add it to the library
function Book(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
        if (element.id == 'title'){this.title = element.value;}
        if (element.id == 'author'){this.author = element.value;}
        if (element.id == 'year'){this.release = element.value;}
        if (element.id == 'pages'){this.pages = element.value;}
        if (element.id == 'read'){this.read = element.checked;}
    });
    this.index = undefined;
}
Book.prototype.delete = function(index){
    const tableRow = document.querySelectorAll('tr');
    tableRow.forEach(element => {
        if (element.classList.contains(index)){
            element.remove();
        }
    })
}

function addBookToLibrary(book){
    book.index = indexNumber;
    indexNumber++;
    myLibrary.push(book);
}

function addBookToTable(book){
    const tr = document.createElement('tr');
    tr.classList.add(book.index)
    const button = document.createElement('button');
    if (book.read == false){
        button.classList.add('read', 'no');
        button.innerText = '✘';
    }
    else {
        button.classList.add('read', 'yes');
        button.innerText = '✔';
    }
    button.addEventListener('click', ()=>{
        if(button.classList.contains('no')){
            button.classList.remove('no');
            button.classList.add('yes');
            button.innerText = '✔';
            book.read = true;
        }
        else{
            button.classList.remove('yes');
            button.classList.add('no');
            button.innerText = '✘';
            book.read = false;
        }
    })


    let title = document.createElement('td');
    title.innerText = book.title;
    tr.appendChild(title);

    let author = document.createElement('td');
    author.innerText = book.author;
    tr.appendChild(author);

    let release = document.createElement('td');
    release.innerText = book.release;
    tr.appendChild(release);

    let pages = document.createElement('td');
    pages.innerText = book.pages;
    tr.appendChild(pages);

    let read = document.createElement('td');
    read.appendChild(button);
    tr.appendChild(read);   

    let deleteColumn = document.createElement('td');
    const delButton = document.createElement('button');
    const img = document.createElement('img');
    img.src = './trash.svg';
    delButton.appendChild(img);
    delButton.classList.add('read', 'no');
    delButton.addEventListener('click', ()=>{
        book.delete(book.index);
        myLibrary = myLibrary.filter((books) => books.index !== book.index);
    })
    deleteColumn.appendChild(delButton);
    tr.appendChild(deleteColumn);

    
    table.append(tr);
}

// clear modal after closing it
function ClearModal(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
        element.value = '';
        if (element.type == 'checkbox'){
            element.checked = false;
        }
    });
}

// dialog popup
addBook.addEventListener("click", () => {
    dialog.showModal();
});
closeDialog.addEventListener("click", (event) => {
    event.preventDefault();
    ClearModal();
    dialog.close();
});

getForm.addEventListener("click", (event)=> {
    event.preventDefault();
    newBook = new Book();
    addBookToLibrary(newBook);
    addBookToTable(newBook);
    ClearModal();
    dialog.close();
})

// 
// delete book
// work with indexes
// all inputs validation
// 