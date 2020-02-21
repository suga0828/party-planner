import { Module } from '../../definitions/module.constant';
import { peopleInitialState } from './people.state';
import { filterInitialState } from './filter.state';

export const moduleInitialState: Module = {
  people: peopleInitialState,
  filter: filterInitialState
};
