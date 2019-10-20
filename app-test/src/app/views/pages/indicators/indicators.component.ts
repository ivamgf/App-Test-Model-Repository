import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';

import { AppService } from '../../../app.service';
import { Indicators } from './../../../interfaces/indicators';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {

  public Indicators: Indicators[];
  public Indicators$: Observable<Indicators[]>;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    // Method HttpClient
    const indicators$ = this.appService.getIndicators()
    .pipe(
      catchError(error => {
        console.error(error);
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );
    indicators$.subscribe(
      data => {
        this.Indicators = data;
        console.log(this.Indicators);
      }
    );
    // Method HttpClient
  }

}
