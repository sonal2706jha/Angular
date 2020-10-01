import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // styleUrls: ['./child.component.css']
  styles:[`
  h3 {
    color: Blue;
  }
`]
})
export class ChildComponent implements OnInit {

   @Input() parentData;
   @Output() childEvent  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  EventExecuted(){
    this.childEvent.emit('Hello');
  }

}