import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { NextfiveComponent } from './nextfive/nextfive.component';
import { LastfiveComponent } from './lastfive/lastfive.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'nextfive',
        component: NextfiveComponent,
      },

      {
        path: 'lastfive',
        component: LastfiveComponent,
      },
      {
        path: 'lastfive/:events',
        component: EventsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    NextfiveComponent,
    LastfiveComponent,
    EventsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DetailModule {}
