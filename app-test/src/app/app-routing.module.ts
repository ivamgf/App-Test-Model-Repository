import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { ListsComponent } from './views/pages/lists/lists.component';
import { SplashComponent } from './views/pages/splash/splash.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { UpdateComponent } from './views/pages/update/update.component';


const routes: Routes = [
  {
    path: '',
      redirectTo: 'splash',
      pathMatch: 'full'
  },
  {
      path: 'splash',
      component: SplashComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'lists',
      component: ListsComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  },
  {
      path: 'update',
      component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
