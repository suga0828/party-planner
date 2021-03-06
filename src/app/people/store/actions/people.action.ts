import { createAction, props } from '@ngrx/store';

import { Person } from '../../definitions/people.constant';

export enum PeopleActions {
  ADD_PERSON = '[People Component] Add',
  REMOVE_PERSON = '[People Component] Remove',
  ADD_GUESTS_TO_PERSON = '[Person Component] Add guests',
  REMOVE_GUESTS_TO_PERSON = '[Person Component] Remove guests',
  TOGGLE_ATTENDING_TO_PERSON = '[Person Component] Toggle attending'
}

export const addPerson = createAction(
  PeopleActions.ADD_PERSON,
  props<{ payload: Person }>()
);
export const removePerson = createAction(
  PeopleActions.REMOVE_PERSON,
  props<{ payload: number }>()
);

export const addGuests = createAction(
  PeopleActions.ADD_GUESTS_TO_PERSON,
  props<{ payload: number }>()
);

export const removeGuests = createAction(
  PeopleActions.REMOVE_GUESTS_TO_PERSON,
  props<{ payload: number }>()
);

export const toggleAttending = createAction(
  PeopleActions.TOGGLE_ATTENDING_TO_PERSON,
  props<{ payload: number }>()
);


export type PeopleActionsType =
  | typeof addPerson
  | typeof removePerson
  | typeof addGuests
  | typeof removeGuests
  | typeof toggleAttending;
