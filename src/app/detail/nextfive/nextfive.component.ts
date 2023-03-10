import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from '../../appService/app.service';
import { nextfive } from '../../interface/interface';

@Component({
  selector: 'app-nextfive',
  templateUrl: './nextfive.component.html',
  styleUrls: ['./nextfive.component.scss'],
})
export class NextfiveComponent implements OnInit {
  nextfive: nextfive[] = []
  constructor(private _as: AppService) {}

  ngOnInit(): void {
    console.log(this.nextfive);
    // this._as
    //   .getNextfive()
    //   .pipe(map((x) => x.response))
    //   .subscribe((res) => {
    //     this.nextfive = res;
    //   });
  }
}
