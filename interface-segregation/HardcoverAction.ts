import {BookAction} from "./BookAction.ts";

export interface HardcoverAction extends BookAction {
    searchForSecondhand(): void;
}