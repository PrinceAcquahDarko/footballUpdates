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
  getTeamCoach(): Observable<allReponse> {
    let params = new HttpParams();
    params = params.append('team', this.currentTeam!.id);
    return this.http
      .get<allReponse>(this.url + `/coachs`, { params })
      .pipe(catchError(this.handleError));
  }

  getCurrentSeason(id: number): Observable<allReponse> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http
      .get<allReponse>(this.url + `/leagues`, { params })
      .pipe(catchError(this.handleError));
  }

  getTeamInfo(): Observable<allReponse> {
    let params = new HttpParams();
    params = params.append('id', this.currentTeam!.id);
    return this.http
      .get<allReponse>(this.url + `/teams`, { params })
      .pipe(catchError(this.handleError));
  }

  getPlayers(): Observable<allReponse> {
    let params = new HttpParams();
    params = params.append('team', this.currentTeam!.id);
    return this.http
      .get<allReponse>(this.url + `/players/squads`, { params })
      .pipe(catchError(this.handleError));
  }

  getLastfive(): Observable<getNextLastfive> {
    let params = new HttpParams();
    params = params.append('team', this.currentTeam!.id);
    params = params.append('last', 5);
    return this.http
      .get<getNextLastfive>(this.url + `/fixtures`, { params })
      .pipe(catchError(this.handleError));
  }

  getNextfive(): Observable<getNextLastfive> {
    let params = new HttpParams();
    params = params.append('team', this.currentTeam!.id);
    params = params.append('next', 5);
    return this.http
      .get<getNextLastfive>(this.url + `/fixtures`, { params })
      .pipe(catchError(this.handleError));
  }

  getEvents(fixture: string): Observable<allReponse> {
    let params = new HttpParams();
    params = params.append('fixture', fixture);
    return this.http
      .get<allReponse>(this.url + `/fixtures/events`, { params })
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
