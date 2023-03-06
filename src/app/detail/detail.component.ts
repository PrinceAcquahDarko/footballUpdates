import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../appService/app.service';
import { team } from '../interface/interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  selectedTeams = this._as.selectedTeam;
  current_team:team = this.selectedTeams[0];

  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {
    this._as.currentTeam = this.current_team;
  }

  routeToTeamInfo() {
    this._router.navigate(['detail/info']);
  }

  routeTonextFive() {
    this._router.navigate(['detail/nextfive']);
  }

  setCurrentTeam(team: team) {
    this.current_team = team;
    this._as.currentTeam = team;
    this._router.navigate(['detail']);
  }

  removeTeam(team: team) {
    this.selectedTeams = this.selectedTeams.filter((x) => x.id !== team.id);
    if (team.id === this.current_team.id) {
      this.current_team = {
        id: 0,
        logo: '',
        name: ''
      };
      this._as.currentTeam = null;
      this._router.navigate(['detail']);
    }
  }

  routeTolastFive() {
    this._router.navigate(['detail/lastfive']);
  }
}
