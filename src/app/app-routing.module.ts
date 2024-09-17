import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/components/login.component';
import { LandingComponent } from './pages/landing/components/landing.component';

const routes: Routes = 
[
  { path: '', component: LandingComponent }, // Default route
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
