 // Task 1 - Creting Book class 
 class Book {
    constructo(title,author,isbn,copies){
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