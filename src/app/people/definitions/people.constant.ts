export const peopleFeatureKey = 'people';

export interface Person {
  id: number;
  name: string;
  guests: number;
  attending: boolean;
}

export interface People extends Array<Person> { }
