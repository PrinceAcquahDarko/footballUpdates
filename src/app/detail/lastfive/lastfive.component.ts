import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AppService } from '../../appService/app.service';
import { nextfive } from '../../interface/interface';

@Component({
  selector: 'app-lastfive',
  templateUrl: './lastfive.component.html',
  styleUrls: ['./lastfive.component.scss'],
})
export class LastfiveComponent implements OnInit {
  lastfive:nextfive[] = [];
  constructor(private _as: AppService, private _router:Router) {}

  ngOnInit(): void {
    console.log(this.lastfive);
    this._as
      .getLastfive()
      .pipe(map((x) => x.response))
      .subscribe((res) => {
        this.lastfive = res;
      });
  }

  routeToEvents(game:nextfive) {
    this._router.navigate(['detail/lastfive', game.fixture.id], {
      queryParams: { data: JSON.stringify(game) },
    });
  }
}
