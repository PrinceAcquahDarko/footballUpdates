import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpInterceptorModule } from './http.interceptor';
import { DetailModule } from './detail/detail.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule,
     AppRoutingModule, HomeModule, HttpInterceptorModule, DetailModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
