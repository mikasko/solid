import {BookDiscount} from "./BookDiscount.ts";

export class DiscountManager {
    applyBookDiscount(discount: BookDiscount): void {
        console.log(`ваша скидка =  ${discount.getBookDiscount()}%`);
    }
}