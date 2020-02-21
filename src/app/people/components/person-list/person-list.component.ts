import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';

import { PeopleActions } from '../../store';
import { Person, People } from '../../definitions/people.constant';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonListComponent {

  @Input() people: People;

  constructor(private readonly _store: Store<People>) { }

  addGuest(person: Person) {
    this._store.dispatch({ type: PeopleActions.ADD_GUESTS_TO_PERSON, payload: person.id });
  }

  removeGuest(person: Person) {
    this._store.dispatch({ type: PeopleActions.REMOVE_GUESTS_TO_PERSON, payload: person.id });
  }

  toggleAttending(person: Person) {
    this._store.dispatch({ type: PeopleActions.TOGGLE_ATTENDING_TO_PERSON, payload: person.id });
  }
}
