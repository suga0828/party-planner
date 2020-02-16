import { ActionReducerMap } from '@ngrx/store';
import * as peopleReducer from './people.reducer';
import * as filterReducer from './filter.reducer';

export const reducers: ActionReducerMap<any> = {
  people: peopleReducer.reducer,
  filter: filterReducer.reducer
};
