import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Comic } from '../comic';
import { ComicService} from '../comic.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  @Input() comic: Comic;
  
  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService,
    private location: Location
  ) { }

  ngOnInit(): void {
    //this.getComic();
  }


}
