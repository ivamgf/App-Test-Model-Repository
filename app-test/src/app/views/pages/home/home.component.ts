import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';

import { AppService } from '../../../app.service';
import { Weather } from './../../../interfaces/weather';
import { Geoip } from './../../../interfaces/geoip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public weather: Weather[];
  public weather$: Observable<Weather[]>;
  public geoip: Geoip[];
  public geoip$: Observable<Geoip[]>;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    // Method HttpClient Weather
    const weather$ = this.appService.getWeather()
    .pipe(
      catchError(error => {
        console.error(error);
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );
    weather$.subscribe(
      data => {
        this.weather = data;
        console.log(this.weather);
      }
    );
    // Method HttpClient Weather

    // Method HttpClient GeoIp
    const geoip$ = this.appService.getGeoip()
    .pipe(
      catchError(error => {
        console.error(error);
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );
    geoip$.subscribe(
      data => {
        this.geoip = data;
        console.log(this.geoip);
      }
    );
    // Method HttpClient GeoIp
  }

}
