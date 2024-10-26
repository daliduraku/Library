
const  myLibrary = [];

class Book {
    constructor(author, title, pages, read) {
        this.author = author; //string
        this.title = title; //string
        this.pages = pages; //num
        this.read = read; // string
        
    }
}

function addBookToLibrary(author, title, pages, read) {
     // creating a new object
     const newBook = new Book(author, title, pages, read);

     // pushing the new book in the array of objects
     myLibrary.push(newBook);

    // display the book
    displayObjectAsCard(newBook);
}

const button = document.getElementById("showFormBtn");
const form = document.getElementById("myform");

button.addEventListener("click", function(){
    // getting the default value
    const formDisplay = window.getComputedStyle(form).display;

    // if the button is clicked we show the form
    if (formDisplay === "none"){
        form.style.display = "block";
    }else {
        form.style.display = "none";
    }
});

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    // getting data from the form
    const formData = new FormData(event.target);

    // creating variables from the data

    const author = formData.get('author');
    const title = formData.get('title');
    const pages = formData.get('pages'); 
    const read = formData.has('read') ? "The book was read" : "The book was not read";
    
    // calling function to create a new book and add to the library 
    addBookToLibrary(author, title, pages, read);

    // clear the form for another submission
    document.getElementById('myform').reset();

});

function displayObjectAsCard(obj){
    // creating the card element
    const card = document.createElement('div');
    card.classList.add('card')

    //add the objects properties to the card
    for (const key in obj) {
        const propertyDiv = document.createElement('div');
        propertyDiv.innerHTML = `<strong>${key}:</strong> ${obj[key]}`;
        card.appendChild(propertyDiv);
    }

    // append the card to our document
    document.getElementById('cardContainer').appendChild(card);
}

function displayLibraryAsCards(library) {
    library.forEach(book => displayObjectAsCard(book));
}
