import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { filterActions } from '../../store/actions/filter.action';
import { Filters } from '../../definitions/filter.constant';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent {

  Filters = Object.values(Filters);

  constructor(private readonly _store: Store<Filters>) { }

  setFilter(filter: string) {
    let type: string;
    switch (filter) {
      case Filters.all:
        type = filterActions.SHOW_ALL;
        break;
      case Filters.attending:
        type = filterActions.SHOW_ATTENDING;
        break;
      case Filters.withGuests:
        type = filterActions.SHOW_WITH_GUESTS;
        break;
    }
    this._store.dispatch({ type });
  }
}
