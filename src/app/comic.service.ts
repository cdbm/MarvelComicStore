import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Comic } from "./comic";
var crypto = require('crypto-js');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                            'Authorization': 'f173102fdf55bdd474d38102f2ea5a49'})
};

const PRIV_KEY = "e656496c7e2a8208c10aede19d082cba53057c97";
const API_KEY = "f173102fdf55bdd474d38102f2ea5a49";
var ts = new Date().getTime();
var hash = crypto.MD5(ts + PRIV_KEY + API_KEY);


@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private comicsurl = 'https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=false&limit=50&apikey=f173102fdf55bdd474d38102f2ea5a49'+"&ts="+ts+"&hash="+hash;  // URL to web api
  private comicByIdurl = "https://gateway.marvel.com:443/v1/public/characters/";
  private endpoint = 'hasDigitalIssue=false&limit=50&apikey=f173102fdf55bdd474d38102f2ea5a49'+"&ts="+ts+"&hash="+hash;

  constructor(private http: HttpClient,
                  private messageService: MessageService) { }
  

  getComics (): Promise<Comic[]> {
      return this.http.get<Comic[]>(this.comicsurl).pipe(
        map((response: any) => response.data.results),
        catchError(this.handleError('getComics', []))

      ).toPromise();
  }
  getComicsRandom (): Promise<Comic[]> {
    var random = Math.floor((Math.random() * 1000) + 1);
    const url = 'https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=false&limit=15&offset=' + random +'&apikey=f173102fdf55bdd474d38102f2ea5a49'+"&ts="+ts+"&hash="+hash;
    return this.http.get<Comic[]>(url).pipe(
      map((response: any) => response.data.results),
      catchError(this.handleError('getComics', []))

    ).toPromise();
  }


  getCharComic(id: number): Promise<Comic[]> {
    const x = this.comicByIdurl + id +"/comics?"+ this.endpoint;
    return this.http.get<Comic[]>(x).pipe(
      map((response: any) => response.data.results),
      catchError(this.handleError('getComic', []))

    ).toPromise();
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
