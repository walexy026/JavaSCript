alert("WELCOME TO DIGITAL LIBRARY");
let books = prompt('Title of the book');

let author = prompt('Name of the author');

let publisher = prompt('Name of the publisher');

let bOoks = prompt('Title of the book');

let aUthor = prompt('Name of the author');

let pUblisher = prompt('Name of the publisher');

let boOks = prompt('Title of the book');

let auThor = prompt('Name of the author');

let puBlisher = prompt('Name of the publisher');

book1.innerHTML=books;
author1.innerHTML=author;
publisher1.innerHTML=publisher;
book2.innerHTML=bOoks;
author2.innerHTML=aUthor;
publisher2.innerHTML=pUblisher;
book3.innerHTML=boOks;
author3.innerHTML=auThor;
publisher3.innerHTML=puBlisher;

const data  = {

    "Author1": {
        "book": books,
        "author": author,
         "publisher": publisher,
    },

    "Author2": {
        "book": bOoks,
        "author": aUthor,
        "publisher": pUblisher,
    },
    "Author3": {
        "book": boOks,
        "author": auThor,
        "publisher": puBlisher,
    }

}

console.log(data);