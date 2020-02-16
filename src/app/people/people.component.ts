import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { People } from './definitions/people.model';
import { Filters } from './definitions/filter.constant';

import { getPeopleState } from './store';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People;
  state: Observable<{ people: People, filter: Filters }>;
  select: Observable<{ filter: Filters }>;


  constructor(private readonly _store: Store<People>) {
    this.state = _store.pipe(
      select(getPeopleState),
      // To do: apply filter
      // map(s => s.people.filter(s.filter))
    );
  }

  ngOnInit(): void {
  }

}
