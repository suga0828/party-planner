import { People } from './people.constant';

export const moduleFeatureKey = 'people';

export interface Module {
  people: People;
  filter: string;
}
