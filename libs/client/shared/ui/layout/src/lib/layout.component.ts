import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentModule } from '@paltrack/client/shared/ui/header';
import { SideNavigationComponentModule } from '@paltrack/client/shared/ui/side-navigation';
import { LayoutState } from './+state/layout.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MenuButtonClick } from './+state/layout.actions';
import { AuthState } from '@paltrack/client/shared/data-access/auth';

@Component({
  selector: 'paltrack-layout',
  templateUrl: './layout.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @Select(LayoutState.isOpenDrawer) isOpenDrawer$!: Observable<boolean>;
  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;

  constructor(private store: Store) {}

  menuClicked() {
    this.store.dispatch(new MenuButtonClick());
  }
}

@NgModule({
  imports: [CommonModule, HeaderComponentModule, SideNavigationComponentModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutComponentModule {}
