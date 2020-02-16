import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { peopleFeatureKey } from './definitions/people.constant';
import { PersonComponent } from './components/person/person.component';
import { FilterSelectComponent } from './components/filter-select/filter-select.component';
import { PersonInputComponent } from './components/person-input/person-input.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [PeopleComponent, PersonComponent, FilterSelectComponent, PersonInputComponent, PersonListComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    StoreModule.forFeature(peopleFeatureKey, reducers)
  ]
})
export class PeopleModule { }
