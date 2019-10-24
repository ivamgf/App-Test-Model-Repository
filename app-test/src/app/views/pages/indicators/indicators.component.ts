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
  public ano: any[] = [];
  public pib: any[] = [];
  public ipca: any[] = [];
  public salario: any[] = [];
  public cesta: any[] = [];

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
          this.ano.push(this.indicatorsAnos[i].Ano);
          this.pib.push(this.indicatorsAnos[i].PIB);
          this.ipca.push(this.indicatorsAnos[i].IPCA);
          this.salario.push(this.indicatorsAnos[i].salarioMedio);
          this.cesta.push(this.indicatorsAnos[i].cestaBasica);
          this.chartBar(this.ano, this.pib, this.ipca);
        }
      }
    );
    // Method HttpClient
  }
  chartBar(data1, data2, data3) {
    this.data = {
      labels: [data1[0], data1[1], data1[2], data1[3],
              data1[4], data1[5], data1[6], data1[7],
              data1[8], data1[9], data1[10] ],
      datasets: [
          {
              label: 'PIB',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [data2[0], data2[1], data2[2], data2[3],
              data2[4], data2[5], data2[6], data2[7],
              data2[8], data2[9], data2[10]]
          },
          {
              label: 'IPCA',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [data3[0], data3[1], data3[2], data3[3],
                    data3[4], data3[5], data3[6], data3[7],
                    data3[8], data3[9], data3[10] ]
          }
        ]
      };
  }
}
