import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxFormModule, DxLoadIndicatorModule } from 'devextreme-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'paltrack-login-form',
  templateUrl: './login-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  @Input() loading = false;
  @Output() formSubmit = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6,}$")]],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  handleSubmit() {
    if (this.loginForm.valid) this.formSubmit.emit(this.loginForm);
  }
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, DxFormModule, DxButtonModule, DxLoadIndicatorModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginFormComponentModule {}
