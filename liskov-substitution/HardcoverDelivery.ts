import {BookDelivery} from "./BookDelivery.ts";

export class HardcoverDelivery extends BookDelivery {
    getDeliveryLocations(): void {
        // показать список магазинов, где можно нашему клиенту забрать его физические книги
    }
}