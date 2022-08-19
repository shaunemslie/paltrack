import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDrawerModule, DxListModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'paltrack-side-navigation',
  templateUrl: './side-navigation.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavigationComponent {
  navigation = [
    { id: 1, text: 'Home', icon: 'home', path: 'home' },
    { id: 2, text: 'Flights', icon: 'airplane', path: 'flights' },
  ];

  @Input() isOpen!: boolean;
}

@NgModule({
  imports: [CommonModule, DxDrawerModule, DxListModule, RouterModule],
  declarations: [SideNavigationComponent],
  exports: [SideNavigationComponent],
})
export class SideNavigationComponentModule {}
