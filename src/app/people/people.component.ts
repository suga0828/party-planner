import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PeopleActions, getPeopleState } from './store';
import { People } from './definitions/people.model';
import { Person } from './definitions/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  state: Observable<{ people: People }>;

  constructor(private readonly _store: Store<People>) {
    this.state = _store.pipe(select(getPeopleState));
  }

  ngOnInit(): void {
  }

  addPerson(name: string) {
    const personToAdd: Person = {
      id: Date.now(),
      name,
      guests: 0,
      attending: false
    };
    this._store.dispatch({ type: PeopleActions.ADD_PERSON, personToAdd });
  }
}
