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
        console.log(this.finances);
      }
    );
    // Method HttpClient
  }

}
