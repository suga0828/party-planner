import { createFeatureSelector } from '@ngrx/store';

import { filterFeatureKey, Filters } from '../../definitions/filter.constant';

export const getFilterState = createFeatureSelector<{ filter: Filters }>(filterFeatureKey);
