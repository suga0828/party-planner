import { Action, createReducer, on } from '@ngrx/store';
import * as FilterActions from '../actions/filter.action';

import { Filters } from '../../definitions/filter.constant';

import { filterInitialState } from '../states';

export const filterReducer = createReducer(
  filterInitialState,
  on(FilterActions.showAll, (state) => Filters.all),
  on(FilterActions.showAttending, (state) => Filters.attending),
  on(FilterActions.showWithGuests, (state) => Filters.withGuests),
);

export function reducer(state: Filters, action: Action): Filters {
  return filterReducer(state, action);
}
