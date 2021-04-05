import {DiscountManager} from "./DiscountManager.ts";
import {BiographyDiscount} from "./BiographyDiscount.ts";
import {HistoryDiscount} from "./HistoryDiscount.ts";
import {CookedDiscount} from "./CookedDiscount.ts";

// скидки
let biographyDiscount = new BiographyDiscount();
let historyDiscount = new HistoryDiscount();
let cookedDiscount = new CookedDiscount();

// менеджер по скидкам
let discountManager = new DiscountManager();

// применить скидки
discountManager.applyBookDiscount(biographyDiscount);
discountManager.applyBookDiscount(historyDiscount);
discountManager.applyBookDiscount(cookedDiscount);