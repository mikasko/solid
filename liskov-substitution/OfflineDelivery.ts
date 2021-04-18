import {BookDelivery} from "./BookDelivery.ts";

export class OfflineDelivery extends BookDelivery{

    getDeliveryLocations(): void {
        // логика только для физичечких книг
    }
}