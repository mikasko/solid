import {BookAction} from "./BookAction.ts";

export interface AudioAction extends BookAction {
    listenToSample(): void;
}