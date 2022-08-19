import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  NgModule,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxContextMenuModule, DxListModule, DxToolbarModule } from 'devextreme-angular';
import { Router, RouterModule } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AuthState, Logout } from '@paltrack/client/shared/data-access/auth';
import { Observable } from 'rxjs';
import { User } from '@paltrack/client/shared/interfaces';

@Component({
  selector: 'paltrack-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  menuButtonOpts = {
    icon: 'menu',
    stylingMode: 'text',
    onClick: ($event: Event) => {
      this.menuClick.emit($event);
    },
  };
  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['/profile']);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.store.dispatch(new Logout())
    }
  }];
  @Output() menuClick = new EventEmitter<Event>();
  @Select(AuthState.user) user$: Observable<User> | undefined;

  constructor(private router: Router, private store: Store) {}
}

@NgModule({
  imports: [CommonModule, RouterModule, DxToolbarModule, DxButtonModule, DxContextMenuModule, DxListModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderComponentModule {}
