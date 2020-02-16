import { createFeatureSelector } from '@ngrx/store';

import { peopleFeatureKey } from '../../definitions/people.constant';
import { People } from '../../definitions/people.model';

export const getPeopleState = createFeatureSelector<{ people: People }>(peopleFeatureKey);
