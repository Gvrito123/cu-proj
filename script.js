let books = document.getElementById('books');
let book = document.getElementById('book');
let author = document.getElementById('author');
let publisher = document.getElementById('publisher');
let year = document.getElementById('year');
let submitBtn = document.getElementById('publish');
let bookArray = [];
class Book{
    constructor(book,author,publisher,year){
        this.bookName = book;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
    }
    publishBook(){
        bookArray.push({
            bookName: this.bookName,
            author: this.author,
            publisher: this.publisher,
            year: this.year
        })
    }
    displayBook(){
        let lastBook = bookArray.length-1;
            books.innerHTML += `
                <tr>
                    <td>${bookArray[lastBook].bookName}</td>
                    <td>${bookArray[lastBook].author}</td>
                    <td>${bookArray[lastBook].publisher}</td>
                    <td>${bookArray[lastBook].year}</td>
                </tr>
            `
        
    }
}
submitBtn.addEventListener('click',() =>{
    let bookName = book.value;
    let bookAuthor = author.value;
    let bookPublisher = publisher.value;
    let bookYear = year.value;
    let newBook = new Book(bookName,bookAuthor,bookPublisher,bookYear)
    newBook.publishBook();
    newBook.displayBook();
})