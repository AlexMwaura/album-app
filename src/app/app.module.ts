import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/components/login.module';
import { HomeModule } from './pages/home/components/home.module';
import { UserDetailModule } from './pages/user-detail/components/user-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    UserDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
