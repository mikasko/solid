import {Book} from "./Book.ts";

export class Library {
    inventoryBook: Book;

    constructor(book: Book) {
        this.inventoryBook = book;
    }

    /**
     * ищим нашу книгу по названию и автору
     */
    searchBookBy(book: Book): string {
        if (this.inventoryBook.title == book.title && this.inventoryBook.author == book.author) {
            return 'книга найдена';
        }
        return 'книга не была найдена';
    }
}