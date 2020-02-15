import { ActionReducerMap } from '@ngrx/store';
import * as peopleReducer from './people.reducer';

export const reducers: ActionReducerMap<any> = {
  people: peopleReducer.reducer
};
