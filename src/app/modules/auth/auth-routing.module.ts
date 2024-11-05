import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component'; // Asegúrate de importar tu componente Home
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path:'login', //http://localhost:4200/auth/login
    component: LoginPageComponent
  },
  {
    path:'register', //http://localhost:4200/auth/register
    component: RegisterPageComponent
  },
  {
     path: 'home', //http://localhost:4200/home
     component: HomePageComponent
  },
  {
    path:'', //http://localhost:4200/auth/
    redirectTo: '/auth/login'
  },
  {
    path:'**', //http://localhost:4200/auth/
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
