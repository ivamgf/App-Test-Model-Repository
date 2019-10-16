import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [MessageService]
})
export class UpdateComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  cancelUp() {
    this.router.navigate(['/lists']);
  }
}
