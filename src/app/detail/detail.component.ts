import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AppService } from '../appService/app.service';
import { nextfive } from '../interface/interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  lastTen: nextfive[] = [];

  constructor(
    private route: ActivatedRoute,
    private _as: AppService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log(params);
      console.log(id);
      this._as
        .getLastTen(id)
        .pipe(map((x) => x.response))
        .subscribe((res) => {
          this.lastTen = res;
        });
    });
  }

  routeToHome() {
    this._router.navigate(['home']);
  }
}
