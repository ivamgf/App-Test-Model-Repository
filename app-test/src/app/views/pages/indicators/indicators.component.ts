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

  public data: any;
  public Indicators: Indicators[];
  public Indicators$: Observable<Indicators[]>;
  public indicatorsEcon: any[] = [];
  public indicatorsAnos: any[] = [];
  public cardIndicators: any;

  constructor(
    private appService: AppService
  ) {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Second Dataset',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
      };
    }

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
