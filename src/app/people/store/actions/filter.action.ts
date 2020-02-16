import { createAction, props } from '@ngrx/store';
import { Filters } from '../../definitions/filter.constant';

export enum filterActions {
  SHOW_ALL = '[Filter Select Component] All',
  SHOW_ATTENDING = '[Filter Select Component] Attending',
  SHOW_WITH_GUESTS = '[Filter Select Component] With guests'
}

export const showAll = createAction(
  filterActions.SHOW_ALL,
  props<{ filter: Filters.all }>()
);
export const showAttending = createAction(
  filterActions.SHOW_ATTENDING,
  props<{ filter: Filters.attending }>()
);

export const showWithGuests = createAction(
  filterActions.SHOW_WITH_GUESTS,
  props<{ filter: Filters.withGuests }>()
);

export type FilterActionsType =
  | typeof showAll
  | typeof showAttending
  | typeof showWithGuests;
