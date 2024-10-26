
const  myLibrary = [];

class Book {
    constructor(author, title, pages, read) {
        this.author = author; //string
        this.title = title; //string
        this.pages = pages; //num
        this.read = read; // string
    }


}

const button = document.getElementById("showFormBtn");
const form = document.getElementById("myform");

button.addEventListener("click", function(){
    const formDisplay = window.getComputedStyle(form).display;

    if (formDisplay === "none"){
        form.style.display = "block";
    }else {
        form.style.display = "none";
    }
});

const submitButton = document.getElementById("submitBtn")

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    
})
