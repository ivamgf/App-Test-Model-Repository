// Imports Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

// Imports PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// Import Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/header/header.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './views/pages/lists/lists.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { UpdateComponent } from './views/pages/update/update.component';
import { AppService } from './app.service';
import { SplashComponent } from './views/pages/splash/splash.component';
import { FinanceComponent } from './views/pages/finance/finance.component';
import { IndicatorsComponent } from './views/pages/indicators/indicators.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ListsComponent,
    RegisterComponent,
    UpdateComponent,
    SplashComponent,
    FinanceComponent,
    IndicatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AccordionModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
