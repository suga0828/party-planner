import { createAction, props } from '@ngrx/store';

import { Person } from '../../definitions/models/person.model';

export const addPerson = createAction(
  '[People Component] Add',
  props<{ personToAdd: Person }>()
);
export const removePerson = createAction(
  '[People Component] Remove',
  props<{ personToRemove: Person }>()
);
export const addGuests = createAction(
  '[Person Component] Add guests',
  props<{ currentGuests: number }>()
);
export const removeGuests = createAction(
  '[Person Component] Remove guests',
  props<{ currentGuests: number }>()
);
export const toggleAttending = createAction(
  '[Person Component] Toggle attending',
  props<{ attending: boolean }>()
);
