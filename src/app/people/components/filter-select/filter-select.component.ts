import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Filters } from '../../definitions/filter.constant';
import { filterActions } from '../../store/actions/filter.action';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {

  Filters = Object.values(Filters);

  constructor(private readonly _store: Store<Filters>) { }

  ngOnInit(): void {
  }

  // To do: refactor dispatch
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
