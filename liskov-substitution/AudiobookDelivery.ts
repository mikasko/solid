import {OnlineDelivery} from "./OnlineDelivery.ts";

export class AudiobookDelivery extends OnlineDelivery {
    getSoftwareOptions(): SoftwareOptions {
        return SoftwareOptions.AUDIOBOOK;
    }
}