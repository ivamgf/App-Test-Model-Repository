import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.navHome();
  }
  // Function redirect home
  navHome() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 3000);
  }
  // Function redirect home
}
