import {EbookDelivery} from "./EbookDelivery.ts";
import {AudiobookDelivery} from "./AudiobookDelivery.ts";
import {HardcoverDelivery} from "./HardcoverDelivery.ts";

// before
/*let hardcoverBookDelivery = new HardcoverDelivery();
hardcoverBookDelivery.getDeliveryLocations();

let ebookDelivery = new EbookDelivery();
ebookDelivery.getDeliveryLocations();*/


// after
let hardcoverBookDelivery = new HardcoverDelivery();
hardcoverBookDelivery.getDeliveryLocations();

let ebookDelivery = new EbookDelivery();
ebookDelivery.getSoftwareOptions();

let audiobookDelivery = new AudiobookDelivery();
audiobookDelivery.getSoftwareOptions();

