import { Component, ViewChild, ElementRef } from '@angular/core';
import { Person, People } from '../../definitions/people.constant';
import { Store } from '@ngrx/store';
import { PeopleActions } from '../../store';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent {

  @ViewChild('input') input: ElementRef;

  constructor(private readonly _store: Store<People>) { }

  addPerson(name: string) {
    const personToAdd: Person = {
      id: Date.now(),
      name,
      guests: 0,
      attending: false
    };
    this._store.dispatch({ type: PeopleActions.ADD_PERSON, payload: personToAdd });
    this.input.nativeElement.value = null;
  }
}
