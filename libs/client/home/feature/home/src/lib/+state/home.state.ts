import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

import { Person } from '@paltrack/client/shared/interfaces';
import { PEOPLE_DATA } from './home.data';

export interface HomeStateModel {
  people: Person[] | undefined;
}

@State<HomeStateModel>({
  name: 'feed',
  defaults: {
    people: PEOPLE_DATA,
  },
})
@Injectable()
export class HomeState {
  @Selector() static people(state: HomeStateModel) {
    return state.people;
  }
}
