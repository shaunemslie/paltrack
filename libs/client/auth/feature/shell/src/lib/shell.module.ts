import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouting } from './shell.routing';

@NgModule({
  imports: [CommonModule, AuthRouting],
})
export class AuthModule {}
