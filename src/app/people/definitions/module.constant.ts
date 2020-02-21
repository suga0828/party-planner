import { People } from './people.constant';

export const moduleFeatureKey = 'peopleModule';

export interface Module {
  people: People;
  filter: string;
}
