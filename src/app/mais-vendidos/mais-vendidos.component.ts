import { Component, OnInit } from '@angular/core';
import { Comic } from "../comic";
import { ComicService} from "../comic.service";


@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css']
})
export class MaisVendidosComponent implements OnInit {
  comics : Comic[] = [];
  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(): void {
    this.comicService.getComicsRandom()
    .then((comics: Comic[]) => {
      this.comics = comics;
    })
  }

   // getImage(): 

 selectedComic: Comic;
  onSelect(comic: Comic): void {
  this.selectedComic = comic;
  }

}
