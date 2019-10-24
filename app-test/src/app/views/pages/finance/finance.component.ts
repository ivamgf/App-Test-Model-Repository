import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';

import { AppService } from '../../../app.service';
import { Finance } from '../../../interfaces/finance';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  public finances: Finance[];
  public finances$: Observable<Finance[]>;
  public USDname: string;
  public USDbuy: number;
  public USDsell: number;
  public USDvariation: number;
  public EURname: string;
  public EURbuy: number;
  public EURsell: number;
  public EURvariation: number;
  public BTCname: string;
  public BTCbuy: number;
  public BTCsell: number;
  public BTCvariation: number;
  public IBOVname: string;
  public IBOVlocation: string;
  public IBOVpoints: number;
  public IBOVvariation: number;
  public NASDAQname: string;
  public NASDAQlocation: string;
  public NASDAQpoints: number;
  public NASDAQvariation: number;
  public NIKKEIname: string;
  public NIKKEIlocation: string;
  public NIKKEIvariation: number;
  public taxesDate: any;
  public taxesCDI: number;
  public taxesSelic: number;
  public taxesDailyFactor: number;
  public financesIndicators: any[] = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    // Method HttpClient
    const finances$ = this.appService.getFinance()
    .pipe(
      catchError(error => {
        console.error(error);
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );
    finances$.subscribe(
      data => {
        this.finances = data;
        this.financesIndicators.push(this.finances);
        this.USDname = this.financesIndicators[0].results.currencies.USD.name;
        this.USDbuy = this.financesIndicators[0].results.currencies.USD.buy;
        this.USDsell = this.financesIndicators[0].results.currencies.USD.sell;
        this.USDvariation = this.financesIndicators[0].results.currencies.USD.variation;
        this.EURname = this.financesIndicators[0].results.currencies.EUR.name;
        this.EURbuy = this.financesIndicators[0].results.currencies.EUR.buy;
        this.EURsell = this.financesIndicators[0].results.currencies.EUR.sell;
        this.EURvariation = this.financesIndicators[0].results.currencies.EUR.variation;
        this.BTCname = this.financesIndicators[0].results.currencies.BTC.name;
        this.BTCbuy = this.financesIndicators[0].results.currencies.BTC.buy;
        this.BTCsell = this.financesIndicators[0].results.currencies.BTC.sell;
        this.BTCvariation = this.financesIndicators[0].results.currencies.BTC.variation;
        this.IBOVname = this.financesIndicators[0].results.stocks.IBOVESPA.name;
        this.IBOVlocation = this.financesIndicators[0].results.stocks.IBOVESPA.location;
        this.IBOVpoints = this.financesIndicators[0].results.stocks.IBOVESPA.points;
        this.IBOVvariation = this.financesIndicators[0].results.stocks.IBOVESPA.variation;
        this.NASDAQname = this.financesIndicators[0].results.stocks.NASDAQ.name;
        this.NASDAQlocation = this.financesIndicators[0].results.stocks.NASDAQ.location;
        this.NASDAQpoints = this.financesIndicators[0].results.stocks.NASDAQ.points;
        this.NASDAQvariation = this.financesIndicators[0].results.stocks.NASDAQ.variation;
        this.NIKKEIname = this.financesIndicators[0].results.stocks.NIKKEI.name;
        this.NIKKEIlocation = this.financesIndicators[0].results.stocks.NIKKEI.location;
        this.NIKKEIvariation = this.financesIndicators[0].results.stocks.NIKKEI.variation;
        this.taxesDate = this.financesIndicators[0].results.taxes[0].date;
        this.taxesCDI = this.financesIndicators[0].results.taxes[0].cdi;
        this.taxesSelic = this.financesIndicators[0].results.taxes[0].selic;
        this.taxesDailyFactor = this.financesIndicators[0].results.taxes[0].daily_factor;
      }
    );
    // Method HttpClient
  }

}
