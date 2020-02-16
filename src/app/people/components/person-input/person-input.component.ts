import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person } from '../../definitions/person.model';
import { Store } from '@ngrx/store';
import { PeopleActions } from '../../store';
import { People } from '../../definitions/people.model';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent implements OnInit {

  @ViewChild('input') input: ElementRef;

  constructor(private readonly _store: Store<People >) { }

  ngOnInit(): void {
  }

  addPerson(name: string) {
    const personToAdd: Person = {
      id: Date.now(),
      name,
      guests: 0,
      attending: false
    };
    this._store.dispatch({ type: PeopleActions.ADD_PERSON, personToAdd });
    this.input.nativeElement.value = null;
  }
}
