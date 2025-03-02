 //* Task 1 - Creating Book class-  Developing a Library Management system.
        // This will represent books in the library 
    class Book { 
     constructor(title,author,isbn,copies){
        this.title=title;  // title of the book 
        this.author=author; // Author 
        this.isbn=isbn; // Book number 
        this.copies=copies; // How many copies are availabel
    } // This will allow that the result is in a formated order 
    getDetails() {
    return `Title: ${this.title}, Author:${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies }`;
} 
    updateCopies(quantity) {
       this.copies +=quantity;
}
 }      
     // Test Cases : 
     const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
     console.log(book1.getDetails());
     // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
  
     book1.updateCopies(-1);
     console.log(book1.getDetails());
      // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

 //* Task 2- Creating Borrower Class: A person borrowing a book and the following is to track the books. 
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
 
  //**I combined task 3 and 4 as they are in the same class(Library) because they need to be managed in the same place like  challenge 10
// * Task 3 - Creating a Library Class : Keeping track of multiple books and borrowers 
    class Library {
        constructor() {
            this.books = [];      // Array to hold all book instances 
            this.borrowers = [];  // Array to hold all borrower instances
    }

    // This Method adds a new book to the library
    addBook(book) {
        this.books.push(book);  
    }

    // This Method lists all books in the library
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));  
    }

    // This Method adds a new borrower to the library
    addBorrower(borrower) {
        this.borrowers.push(borrower);  
    }
  // Test cases for 3 and 4 will be at the end *
    // * Task 4 - Implementing Book Borrowing (I followed the same method I used in Challenge 10)
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);  // Using ISBN 
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId); // Find the borrower using their ID
            // If the book is not found : 
        if (!book) {
            console.log(`Book with ISBN ${isbn} was not found,please try again.`);
            return;  // this ends  the method
        }
        // If borrower not found
        if (!borrower) {
            console.log(`Borrower with ID ${borrowerId} was not found,please try again.`);
            return;  // ending  the method
        }

        // Checking  if there are copies available
        if (book.copies > 0) {
            book.updateCopies(-1);  // Reduce the books copies by 1
            borrower.borrowBook(book.title);  // Add the borrowed book to the borrower's list
            console.log(`${borrower.name} borrowed "${book.title}".`);
        } else {
            console.log(`Sorry :(, we are all out of copies of "${book.title}". Please check again another time!`);
        }
    }
}
 
// Test Case : 