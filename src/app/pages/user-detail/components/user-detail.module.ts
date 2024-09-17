import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail.component';



@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserDetailModule { }
