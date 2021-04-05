export class Book {
    private _title: string;
    private _author: string;

    get author(): string {
        return this._author;
    }
    get title(): string {
        return this._title;
    }

    set author(value: string) {
        this._author = value;
    }
    set title(value: string) {
        this._title = value;
    }

    /**
     * ищим нашу книгу по названию и автору
     */
    searchBookBy(book: Book): string {
        if (this.title == book.title && this.author == book.author) {
            return 'книга найдена';
        }
        return 'книга не была найдена';
    }
}