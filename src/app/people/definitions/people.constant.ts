export const peopleFeatureKey = 'peopleList';

export interface Person {
  id: number;
  name: string;
  guests: number;
  attending: boolean;
}

export interface People extends Array<Person> { }
