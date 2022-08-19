import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Person } from '@paltrack/client/shared/interfaces';
import { Observable } from 'rxjs';
import { HomeState } from './+state/home.state';

@Component({
  selector: 'paltrack-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Select(HomeState.people) people$: Observable<Person[]> | undefined;
}
