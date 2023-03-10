import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Location } from '@angular/common';
import { AppService } from '../../appService/app.service';
import { events, nextfive } from '../../interface/interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events! :events[]
  data!:nextfive
  constructor(private route:ActivatedRoute, private _as:AppService, private location:Location) { }
  
  ngOnInit(): void {
    console.log(this.events)
    // this.route.params.subscribe(params => {
    //   const fixture = params['events'];
    //   console.log(params)
    //   console.log(fixture)
    //   this._as.getEvents(fixture).pipe(
    //     map(x => x.response)
    //   ).subscribe(
    //     res => {
    //       this.events = res;
    //     }
    //   )
      
    // })

    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params['data']);
      console.log(this.data)
    });
  }

  goBack() {
    this.location.back()
  }

}
