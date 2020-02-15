import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { peopleFeatureKey } from './definitions/people.constant';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    StoreModule.forFeature(peopleFeatureKey, reducers)
  ]
})
export class PeopleModule { }
