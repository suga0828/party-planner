import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Person } from '../../definitions/people.constant';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Output() addGuest: EventEmitter<void> = new EventEmitter();
  @Output() removeGuest: EventEmitter<void> = new EventEmitter();
  @Output() attending: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
