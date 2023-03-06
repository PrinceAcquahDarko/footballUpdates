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

    //get the standings for the current season
  }
  routeToDetail() {
    this._as.selectedTeam = this.selectedTeams;
    this._router.navigate(['detail']);
  }

  onChange(event: Event, team: team) {
    if ((<HTMLInputElement>event.target).checked) {
      if (this.selectedTeams.length < 5) {
        this.selectedTeams.push(team);
      } else {
        (<HTMLInputElement>event.target).checked = false;
        let index = this.standings.findIndex(
          (i: { team: { id: number } }) => i.team.id === team.id
        );
        if (index !== -1) {
          this.standings[index].checked = false;
        }
        alert('youve reached your maximum limit');
      }
    } else {
      this.selectedTeams = this.selectedTeams.filter((i) => i.id !== team.id);
    }
  }
}
