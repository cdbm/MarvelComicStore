import { Component, OnInit } from '@angular/core';
import { Comic } from "../comic";
import { ComicService} from "../comic.service";

@Component({
  selector: 'app-homem-aranha',
  templateUrl: './homem-aranha.component.html',
  styleUrls: ['./homem-aranha.component.css']
})
export class HomemAranhaComponent implements OnInit {
  comics : Comic[] = [];
  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(): void {
    this.comicService.getCharComic(1009610)
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
