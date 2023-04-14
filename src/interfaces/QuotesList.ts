import type { Quote } from "./Quote";

export interface QuotesList {
    quotes: Quote[];
    total:  number;
    skip:   number;
    limit:  number;
}
