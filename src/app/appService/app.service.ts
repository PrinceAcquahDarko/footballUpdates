import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {  allReponse, getNextLastfive, getStandings, team } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = 'https://V3.football.api-sports.io';
  currentTeam!: team | null;
  season!: string;
  selectedTeam: team[] = [];
  constructor(private http: HttpClient) {}

  getStandings(season: string, league_id: number): Observable<getStandings> {
    let params = new HttpParams();
    params = params.append('season', season);
    params = params.append('league', league_id);
    return this.http
      .get<getStandings>(this.url + `/standings`, { params })
      .pipe(catchError(this.handleError));
  }


  getCurrentSeason(id: number): Observable<allReponse> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http
      .get<allReponse>(this.url + `/leagues`, { params })
      .pipe(catchError(this.handleError));
  }





  getLastTen(id:number): Observable<getNextLastfive> {
    let params = new HttpParams();
    params = params.append('team', id);
    params = params.append('last', 10);
    return this.http
      .get<getNextLastfive>(this.url + `/fixtures`, { params })
      .pipe(catchError(this.handleError));
  }

 

 

  handleError(err: HttpErrorResponse) {
    let message = '';

    if (err.error instanceof ErrorEvent) {
      message = `an error occured: ${err.error.message}`;
    } else {
      message = err.error;
    }

    return throwError(message);
  }
}
