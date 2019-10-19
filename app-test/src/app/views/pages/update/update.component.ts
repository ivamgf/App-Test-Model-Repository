import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [MessageService]
})
export class UpdateComponent implements OnInit {

  formUpdate = this.formBuilder.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    telephone: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.nullValidator]],
    whats: ['', [Validators.required, Validators.nullValidator]]
  });

  public formUp: any[] = [];
  public name: string;
  public telephone: string;
  public email: string;
  public whats: string;
  public maskPhone = ['(', /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    document.getElementById('spinner').style.visibility = 'hidden';
  }
  cancelUp() {
    this.router.navigate(['/lists']);
  }
  update() {
    this.formUp.push(this.formUpdate.value);
    this.name = this.formUp[0].name;
    this.telephone = this.formUp[0].telephone;
    this.email = this.formUp[0].email;
    this.whats = this.formUp[0].whats;

    if ( this.name !== '' ) {
      document.getElementById('spinner').style.visibility = 'visible';
      document.getElementById('spinner').style.position = 'relative';
      document.getElementById('form').style.visibility = 'hidden';
      this.timeoutReg();
    } else {
      this.showError();
      this.timeoutError();
    }
  }
  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Usuário Atualizado com Sucesso!'});
  }
  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'O campo de nome não pode estar vazio!'});
  }
  timeoutReg() {
    setTimeout(() => {
      document.getElementById('spinner').style.visibility = 'hidden';
      document.getElementById('spinner').style.position = 'absolute';
      document.getElementById('form').style.visibility = 'visible';
      this.showSuccess();
      this.timeout();
    }, 3000);
  }
  timeout() {
    setTimeout(() => {
      this.router.navigate(['lists']);
    }, 4000);
  }
  timeoutError() {
    setTimeout(() => {
      location.reload();
    }, 4000);
  }
}
