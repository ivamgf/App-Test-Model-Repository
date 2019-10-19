import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Finance } from './interfaces/finance';
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

  private readonly configUrl = `${environment.APIfinance}finance`;
  private readonly key = `?format=json-cors&key=184e24bd`;

  getFinance() {
    return this.http.get<Finance[]>(this.configUrl + this.key, httpOptions).pipe(take(1));
  }

  constructor(
    private http: HttpClient
  ) { }
}
