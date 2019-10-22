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
  public indicatorsEcon: any[] = [];
  public indicatorsAnos: any[] = [];
  public cardIndicators: any;

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
        this.indicatorsEcon.push(this.Indicators);
        this.indicatorsAnos = this.indicatorsEcon[0].Anos;
        let i;
        for (i = 0; i < this.indicatorsAnos.length; i++) {
          this.cardIndicators = this.indicatorsAnos[i];
        }
      }
    );
    // Method HttpClient
  }

}
