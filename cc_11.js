 // Task 1 - Creating Book class 
    // Developing a Library Management system.
        // This will represent books in the library "Task 2 - Created Borrower Class"
    class Book { 
     constructor(title,author,isbn,copies){
        this.title=title;  // title of the book 
        this.author=author; // Author of the book 
        this.isbn=isbn; // Book number 
        this.copies=copies; // how many are they 
    } // This will allow that the result is in a formated order 
    getDetails() {
    return `Title: ${this.title}, Author:${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies }`;
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
    // A person borrowing a book and the following is to track the books. 
    class Borrower {
        constructor(name,borrowerId) {
            this.name=name;  // The name of who is borrowing 
            this.borrowerId=borrowerId; // The unique ID that is assigned to them 
            this.borrowedBooks=[] ; // The list of borrwed books by their title 
            // 
        }
         //This method is to add books by their tile to the list of borrowed books 
        borrowBook(bookTitle) {
            this.borrowedBooks.push(bookTitle) ;
        }
        // This  method  removes the book from the list when it's borrowed 
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