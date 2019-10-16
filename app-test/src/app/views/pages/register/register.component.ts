import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  cancelReg() {
    this.router.navigate(['/lists']);
  }

}
