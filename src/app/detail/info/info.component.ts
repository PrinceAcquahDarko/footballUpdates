import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from '../../appService/app.service';
import { teamInfo } from '../../interface/interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  teamInfo!: teamInfo;
  coach!: string;
  teamPlayers: { name: string; number: string; image: string }[] = [];

  constructor(private _as: AppService) {}

  ngOnInit(): void {
    console.log(this.teamPlayers);
    // this._as
    //   .getTeamInfo()
    //   .pipe(map((x) => x.response[0]))
    //   .subscribe((res) => {
    //     this.teamInfo = res;
    //   });

    // this._as
    //   .getPlayers()
    //   .pipe(map((x) => x.response[0].players.slice(0, 20)))
    //   .subscribe((res) => {
    //     this.teamPlayers = res;
    //   });

    // this._as
    //   .getTeamCoach()
    //   .pipe(map((x) => x.response[0]))
    //   .subscribe((res) => {
    //     this.coach = res.name;
    //   });
  }
}
