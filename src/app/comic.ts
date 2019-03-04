import { TextObjects } from "./textObjects";
import { Urls } from "./urls";
import {Dates } from "./dates";
import {ComicPrice } from "./comicPrice";
import {Image } from "./Image";

export class Comic {
    id :number; 
    digitalId: number; 
    title: string;
    issueNumber: number;
    variantDescription: string;
    description :string;
    modified :Date;
    isbn : string;
    upc : string;
    diamondCode : string;
    ean : string;
    issn : string;
    format : string;
    pageCount : number;
    textObjects : Array<TextObjects>;
    resourceURI :string;
    urls: Array<Urls>;
    dates : Array<Dates>;
    prices : Array<ComicPrice>;
    thumbnail : Image;
  }