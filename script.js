let notes = 'apple ball ball apple ball ball ball';

let books = 'apple ball ball apple ball ball ball';

console.log(notes, books);

const notesArray = notes.split(' ');

const booksArray = books.split(' ');

console.log(notesArray, booksArray);

let result = true;
let bookObj = {};

let finalResult = findNote(books, notes);
console.log(finalResult);

function findNote(books, notes) {

    notesArray.forEach((element, i) => {
        if (!bookObj[element]) {
            bookObj[element] = 1;
        } else {
            bookObj[element]++;
        }

    });
    return checkInBook(notesArray);


}


function checkInBook(notesArray) {
    notesArray.forEach((element, i) => {
        if (bookObj[element] && bookObj[element] > 0) {
            bookObj[element]--;
        } else {
            result = false;
        }
    });
    return result;
}

function add(a,b){
    let sum =a+b;
    console.log(sum);
}