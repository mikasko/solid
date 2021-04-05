import {BookDiscount} from "./BookDiscount.ts";

export class BiographyDiscount implements BookDiscount{

    /**
     * скидка на книги по истории в 30 процентов
     */
    getBookDiscount(): number {
        return 30;
    }
}