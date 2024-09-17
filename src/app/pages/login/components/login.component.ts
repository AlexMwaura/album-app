import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(
   private router: Router
 ) {}
 username: string = '';
 password: string = '';


 onSignUpClick() {
   this.router.navigate(['/first-time-login']);
 }
 login() {
   // Hardcoded credentials
   const hardcodedUsername = 'testuser';
   const hardcodedPassword = 'password123';


   if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
     this.router.navigate(['/home']);
   } else {
     alert('Invalid username or password');
   }
 }
}



