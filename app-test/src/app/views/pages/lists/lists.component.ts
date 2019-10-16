import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  providers: [MessageService]
})
export class ListsComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Usuário Excluído com Sucesso!'});
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  updateUser() {
    this.router.navigate(['/update']);
  }

}
