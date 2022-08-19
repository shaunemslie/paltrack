import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { InitFlights } from './flights.actions';
import { Flight } from '@paltrack/client/shared/interfaces';
import { FlightsApiService } from '../flights.api-service';

export interface FlightsStateModel {
  flights: Flight[] | undefined;
}

@State<FlightsStateModel>({
  name: 'flights',
  defaults: {
    flights: undefined,
  },
})
@Injectable()
export class FlightsState {
  @Selector() static flights(state: FlightsStateModel) {
    return state.flights;
  }

  constructor(private flightsApiService: FlightsApiService) {}

  @Action(InitFlights)
  initFeed(ctx: StateContext<FlightsStateModel>, action: InitFlights) {
    return this.flightsApiService.getFlights(action.params).pipe(
      tap((flights: Flight[]) => {
        ctx.setState({
          flights: flights,
        });
      })
    );
  }
}
