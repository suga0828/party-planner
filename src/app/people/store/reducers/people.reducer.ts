import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.action';

import { People } from '../../definitions/people.constant';

import { peopleInitialState } from '../states';

export const peopleReducer = createReducer(
  peopleInitialState,
  on(PeopleActions.addPerson, (people, { payload }) => [...people, payload]),
  on(PeopleActions.removePerson, (people, { payload }) => people.filter(el => el.id !== payload)),
  on(PeopleActions.addGuests, (people, { payload }) => people.map(person => {
    if (person.id === payload) {
      return Object.assign({}, person, {
        guests: person.guests + 1
      });
    }
    return person;
  })),
  on(PeopleActions.removeGuests, (people, { payload }) => people.map(person => {
    if (person.id === payload) {
      return Object.assign({}, person, {
        guests: person.guests - 1
      });
    }
    return person;
  })),
  on(PeopleActions.toggleAttending, (people, { payload }) => people.map(person => {
    if (person.id === payload) {
      return Object.assign({}, person, {
        attending: !person.attending
      });
    }
    return person;
  }))
);

export function reducer(state: People, action: Action): People {
  return peopleReducer(state, action);
}
