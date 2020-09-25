import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Input() receivedmessage;
  //@Output() childEvent = new EventEmitter();
  @Output() childEvent : EventEmitter<string>  = new EventEmitter();

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'JSON';
  jsonStatus = '';
  serverCreated = false;
  servers =['{id=1,name=Sonal,compitancy=DotNet}',
  '{id=2,name=Abhishek,compitancy=DotNet}',
   '{id=1,name=Arpit,compitancy=DotNet}']
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  
  onCreateServer() {
    this.serverCreated= true;
    this.servers.push(this.jsonStatus);
    this.serverCreationStatus = 'Server was created! Name is ' + this.servers;
    
  }

  FireEvent(){
    this.childEvent.emit('Hello Parent');
  } 

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
