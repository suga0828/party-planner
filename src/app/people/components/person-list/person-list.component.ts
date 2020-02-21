import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Person, People } from '../../definitions/people.constant';
import { Store } from '@ngrx/store';
import { PeopleActions } from '../../store';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonListComponent implements OnInit {

  @Input() people: People;

  constructor(private readonly _store: Store<People>) { }

  ngOnInit(): void {
  }

  addGuest(person: Person) {
    this._store.dispatch({ type: PeopleActions.ADD_GUESTS_TO_PERSON, id: person.id });
  }

  removeGuest(person: Person) {
    this._store.dispatch({ type: PeopleActions.REMOVE_GUESTS_TO_PERSON, id: person.id });
  }

  toggleAttending(person: Person) {
    this._store.dispatch({ type: PeopleActions.TOGGLE_ATTENDING_TO_PERSON, id: person.id });
  }
}
