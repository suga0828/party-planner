import { createFeatureSelector } from '@ngrx/store';

import { peopleFeatureKey } from '../../definitions/people.constant';
import { People } from '../../definitions/people.model';
import { Filters } from '../../definitions/filter.constant';

// To do: separe selector
export const getPeopleState = createFeatureSelector<{ people: People, filter: Filters }>(peopleFeatureKey);
