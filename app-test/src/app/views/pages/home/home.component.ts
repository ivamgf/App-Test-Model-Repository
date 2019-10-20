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
  public weatherCity: any[] = [];
  public city: string;
  public date: any;
  public time: any;
  public description: string;
  public windSpeedy: string;
  public conditionSlug: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    document.getElementById('cloud').style.visibility = 'hidden';
    document.getElementById('cloudDay').style.visibility = 'hidden';
    document.getElementById('sun').style.visibility = 'hidden';
    document.getElementById('rain').style.visibility = 'hidden';
    document.getElementById('clear-night').style.visibility = 'hidden';
    document.getElementById('cloudly-night').style.visibility = 'hidden';
    document.getElementById('storm').style.visibility = 'hidden';
    document.getElementById('fog').style.visibility = 'hidden';
    document.getElementById('hail').style.visibility = 'hidden';
    document.getElementById('snow').style.visibility = 'hidden';
    document.getElementById('error').style.visibility = 'hidden';
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
        this.weatherCity.push(this.weather);
        console.log(this.weatherCity);
        this.city = this.weatherCity[0].results.city;
        this.date = this.weatherCity[0].results.date;
        this.time = this.weatherCity[0].results.time;
        this.description = this.weatherCity[0].results.description;
        this.windSpeedy = this.weatherCity[0].results.wind_speedy;
        this.conditionSlug = this.weatherCity[0].results.condition_slug;
        if ( this.conditionSlug === 'clear_day' ) {
          document.getElementById('sun').style.visibility = 'visible';
          document.getElementById('sun').style.position = 'relative';
        } else {
          if ( this.conditionSlug === 'clear_night' ) {
            document.getElementById('clear-night').style.visibility = 'visible';
            document.getElementById('clear-night').style.position = 'relative';
          } else {
            if ( this.conditionSlug === 'cloudly_day' ) {
              document.getElementById('cloudDay').style.visibility = 'visible';
              document.getElementById('cloudDay').style.position = 'relative';
            } else {
              if ( this.conditionSlug === 'cloudly_night' ) {
                document.getElementById('cloudly-night').style.visibility = 'visible';
                document.getElementById('cloudly-night').style.position = 'relative';
              } else {
                if ( this.conditionSlug === 'rain' ) {
                  document.getElementById('rain').style.visibility = 'visible';
                  document.getElementById('rain').style.position = 'relative';
                } else {
                  if ( this.conditionSlug === 'rain' ) {
                    document.getElementById('rain').style.visibility = 'visible';
                    document.getElementById('rain').style.position = 'relative';
                  } else {
                    if ( this.conditionSlug === 'storm' ) {
                      document.getElementById('storm').style.visibility = 'visible';
                      document.getElementById('storm').style.position = 'relative';
                    } else {
                      if ( this.conditionSlug === 'fog' ) {
                        document.getElementById('fog').style.visibility = 'visible';
                        document.getElementById('fog').style.position = 'relative';
                      } else {
                        if ( this.conditionSlug === 'hail' ) {
                          document.getElementById('hail').style.visibility = 'visible';
                          document.getElementById('hail').style.position = 'relative';
                        } else {
                          if ( this.conditionSlug === 'snow' ) {
                            document.getElementById('snow').style.visibility = 'visible';
                            document.getElementById('snow').style.position = 'relative';
                          } else {
                            if ( this.conditionSlug === 'cloud' ) {
                              document.getElementById('cloud').style.visibility = 'visible';
                              document.getElementById('cloud').style.position = 'relative';
                            } else {
                              document.getElementById('error').style.visibility = 'visible';
                              document.getElementById('error').style.position = 'relative';
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    );
    // Method HttpClient Weather
    console.log(this.conditionSlug);
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
      }
    );
    // Method HttpClient GeoIp
  }

}
