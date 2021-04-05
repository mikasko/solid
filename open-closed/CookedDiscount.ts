import {BookDiscount} from "./BookDiscount.ts";

export class CookedDiscount implements BookDiscount {

    getBookDiscount(): number {
        return 10;
    }
}