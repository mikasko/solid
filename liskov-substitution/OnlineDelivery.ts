import {BookDelivery} from "./BookDelivery.ts";

export abstract class OnlineDelivery extends BookDelivery{

    abstract getSoftwareOptions(): SoftwareOptions;
}