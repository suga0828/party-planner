import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.action';

import { People } from '../../definitions/people.model';

export const initialState: People = [];

export const peopleReducer = createReducer(
  initialState,
  on(PeopleActions.addPerson, (people, { personToAdd }) => [...people, personToAdd]),
  on(PeopleActions.removePerson, (people, { id }) => people.filter(el => el.id !== id)),
  on(PeopleActions.addGuests, (people, { id }) => people.map(person => {
    if (person.id === id) {
      return Object.assign({}, person, {
        guests: person.guests + 1
      });
    }
    return person;
  })),
  on(PeopleActions.removeGuests, (people, { id }) => people.map(person => {
    if (person.id === id) {
      return Object.assign({}, person, {
        guests: person.guests - 1
      });
    }
    return person;
  })),
  on(PeopleActions.toggleAttending, (people, { id }) => people.map(person => {
    if (person.id === id) {
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
