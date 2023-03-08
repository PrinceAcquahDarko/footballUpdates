import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AppService } from '../appService/app.service';
import { allCountries, standings, team } from '../interface/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedTeams: team[] = [];
  page = 1;
  pageSize = 10;
  show = false;
  underline!: string;
  standings: standings[] = [];
  allCountries: allCountries[] = [];

  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {}

  displayTable(leagueId: number, country: string) {
    this.show = true;
    //get the current season
    this.underline = country;
    let if_country = this.allCountries.filter((x) => x.country === country)[0];
    if (if_country) {
      this.standings = if_country.standings;
      this.show = false;
      return;
    }
    this._as
      .getCurrentSeason(leagueId)
      .pipe(
        map((x) => x.response[0].seasons[x.response[0].seasons.length - 1].year)
      )
      .subscribe(
        (res) => {
          console.log(res);
          this._as
            .getStandings(res, leagueId)
            .pipe(map((x) => x.response[0].league.standings[0]))
            .subscribe(
              (res) => {
                console.log(res, 'from res');
                res.map((x: { checked: boolean }) => (x.checked = false));
                this.standings = res;
                this.allCountries.push({
                  country,
                  standings: res,
                });

                this.show = false;
              },
              (err) => {
                this.show = false;
                console.log(err);
              }
            );
        },
        (err) => {
          this.show = false;
          console.log(err);
        }
      );

  }
  routeToDetail(id:number) {
    this._router.navigate(['detail', id]);
  }

}
