import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponentModule } from '@paltrack/client/auth/ui/login-form';

export const loginRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(loginRoutes), LoginFormComponentModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
