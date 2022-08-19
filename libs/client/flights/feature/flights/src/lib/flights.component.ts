import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Flight } from '@paltrack/client/shared/interfaces';
import { Observable } from 'rxjs';
import { InitFlights } from './+state/flights.actions';
import { FlightsState } from './+state/flights.state';

@Component({
  selector: 'paltrack-flights',
  templateUrl: './flights.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsComponent implements OnInit {
  @Select(FlightsState.flights) flights$: Observable<Flight[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    // TODO: Pagination

    // TODO: User filtering
    return this.store.dispatch(new InitFlights({ icao24: '', begin: 1, end: 1 }));
  }
}
