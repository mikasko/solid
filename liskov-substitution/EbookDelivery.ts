import {OnlineDelivery} from "./OnlineDelivery.ts";

export class EbookDelivery extends OnlineDelivery {
    getSoftwareOptions(): SoftwareOptions {
        return SoftwareOptions.EBOOK;
    }
}