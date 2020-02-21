import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { People } from './definitions/people.constant';
import { Filters } from './definitions/filter.constant';

import { getPeopleState } from './store';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  people: Observable<People>;
  select: Observable<Filters>;

  constructor(private readonly _store: Store<People>) {
    this.people = _store.pipe(select(getPeopleState));
  }
}
