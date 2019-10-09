import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/header/header.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AccordionModule,
    BrowserAnimationsModule,
    CommonModule,
    MenuModule,
    SplitButtonModule,
    InputTextModule,
    FormsModule,
    InputMaskModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    HttpClientModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
