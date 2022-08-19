import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from '@paltrack/client/shared/data-access/auth';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'paltrack-login',
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
  loading = false;
  private destroyed$ = new Subject<void>();

  constructor(private store: Store) {}

  login(loginForm: FormGroup) {
    this.loading = true;
    this.store.dispatch(new Login(loginForm.value)).pipe(takeUntil(this.destroyed$)).subscribe((res) => {
      if (res) this.loading = false;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
