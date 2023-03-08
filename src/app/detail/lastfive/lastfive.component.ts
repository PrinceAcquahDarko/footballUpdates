import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AppService } from 'src/app/appService/app.service';
import { nextfive } from 'src/app/interface/interface';

@Component({
  selector: 'app-lastfive',
  templateUrl: './lastfive.component.html',
  styleUrls: ['./lastfive.component.scss'],
})
export class LastfiveComponent implements OnInit {
  lastfive:nextfive[] = [];
  constructor(private _as: AppService, private _router:Router) {}

  ngOnInit(): void {
   
  }

  routeToEvents(game:nextfive) {
    this._router.navigate(['detail/lastfive', game.fixture.id], {
      queryParams: { data: JSON.stringify(game) },
    });
  }
}
