 // Task 1 - Creting Book class 
 class Book {
    constructor(title,author,isbn,copies){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        this.copies=copies;
    }
    getDetails() {
    return `Title: ${this.title}Author:${this.author}, ISBN: ${this.isbn}, Copies${this.copies }`;
}
    updateCopies(quantity) {
       this.copies +=quantity;
}
 }
   //Test Cases: 
   const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

 // Task 2- Creating Borrower Class 
    class Borrower {
        constructor(name,borrowerId) {
            this.name=name;
            this.borrowerId=borrowerId;
            this.borrowedBooks=[] ; // This array is to  store  borrowed books by their title.
        }
        borrowBooks(bookTitle) {
            this.borrowedBooks.push(bookTitle) ;
        }
        returnBook(bookTitle){
        const index=this.borrowedBooks.indexOf(bookTitle) ; 
        if(index >-1) {
            this.borrowedBooks.splice(index, 1 );
        }
    }
}
    //Test Cases: 
    const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []