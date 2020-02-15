import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.action';

import { People } from '../../definitions/models/people.model';

export const initialState: { people: People } = {
  people: []
};

export const peopleReducer = createReducer(
  initialState,
  on(PeopleActions.addPerson, (state, { personToAdd }) => ({ ...state, people: [...state.people, personToAdd] })),
  on(PeopleActions.removePerson, (state, { id }) => ({
      ...state,
      people: [...state.people].splice(state.people.findIndex(person => person.id === id), 1)
    })
  ),
  );

export function reducer(state: { people: People }, action: Action): { people: People } {
  return peopleReducer(state, action);
}
