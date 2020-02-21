import { createFeatureSelector } from '@ngrx/store';

import { Module, moduleFeatureKey } from '../../definitions/module.constant';

export const getModuleState = createFeatureSelector<Module>(moduleFeatureKey);
