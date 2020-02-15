import { createFeatureSelector } from '@ngrx/store';

import { peopleFeatureKey } from '../../definitions/people.constant';

export const getPeopleState = createFeatureSelector<any>(peopleFeatureKey);
