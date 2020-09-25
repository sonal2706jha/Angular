import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : [`
    .online {
        color:yellow;
    }
    .offline {
      color : blue;
    }
  `]

})
export class ServerComponent {
  serverId: number = 100;
  serverStatus: string = 'online';
  servers =['{id=1,name=Sonal,compitancy=DotNet}','{id=2,name=Abhishek,compitancy=DotNet}', '{id=1,name=Arpit,compitancy=DotNet}'];

constructor(){
  this.serverStatus = Math.random()> 0.5 ? 'online' : 'offline';
}

  getServerStatus() {
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
