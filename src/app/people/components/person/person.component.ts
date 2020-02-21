import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../../definitions/people.constant';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input() person: Person;
  @Output() addGuest: EventEmitter<void> = new EventEmitter();
  @Output() removeGuest: EventEmitter<void> = new EventEmitter();
  @Output() attending: EventEmitter<void> = new EventEmitter();

}
