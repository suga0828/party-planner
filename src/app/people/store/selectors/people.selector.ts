import { createFeatureSelector } from '@ngrx/store';

import { peopleFeatureKey, People } from '../../definitions/people.constant';

export const getPeopleState = createFeatureSelector<People>(peopleFeatureKey);
