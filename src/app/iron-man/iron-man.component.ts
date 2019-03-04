import { Component, OnInit } from '@angular/core';
import { Comic } from "../comic";
import { ComicService} from "../comic.service";

@Component({
  selector: 'app-iron-man',
  templateUrl: './iron-man.component.html',
  styleUrls: ['./iron-man.component.css']
})
export class IronManComponent implements OnInit {
  comics : Comic[] = [];
  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.getComics();
  }
  
  getComics(): void {
    this.comicService.getCharComic(1009368)
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
