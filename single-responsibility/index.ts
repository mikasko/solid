import {Book} from "./Book.ts";
import {Library} from "./Library.ts";

const book = new Book();
book.title = 'Harry Potter';
book.author = 'Rowling';

const book2 = new Book();
book.title = 'Harry Potter2';
book.author = 'Rowling';

const library = new Library(book);

console.log(library.searchBookBy(book2));