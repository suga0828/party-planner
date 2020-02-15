import { createFeatureSelector } from '@ngrx/store';

import { peopleFeatureName } from '../../definitions/people.constant';

export const getPeopleState = createFeatureSelector<any>(peopleFeatureName);
