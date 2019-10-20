import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Finance } from './interfaces/finance';
import { Indicators } from './interfaces/indicators';
import { Weather } from './interfaces/weather';
import { Geoip } from './interfaces/geoip';
// import { environment } from '../environments/environment.prod';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly configUrl = `${environment.APIhg}finance`;
  private readonly configUrl2 = `${environment.APIindicators}indicators`;
  private readonly configUrl3 = `${environment.APIhg}weather`;
  private readonly configUrl4 = `${environment.APIhg}geoip`;
  private readonly key = `?format=json-cors&key=184e24bd`;
  private readonly key2 = `?format=json-cors&key=184e24bd&city_name=Florianopolis,SC`;

  getFinance() {
    return this.http.get<Finance[]>(this.configUrl + this.key, httpOptions).pipe(take(1));
  }

  getIndicators() {
    return this.http.get<Indicators[]>(this.configUrl2, httpOptions).pipe(take(1));
  }

  getWeather() {
    return this.http.get<Weather[]>(this.configUrl3 + this.key2, httpOptions).pipe(take(1));
  }

  getGeoip() {
    return this.http.get<Geoip[]>(this.configUrl4 + this.key, httpOptions).pipe(take(1));
  }

  constructor(
    private http: HttpClient
  ) { }
}
