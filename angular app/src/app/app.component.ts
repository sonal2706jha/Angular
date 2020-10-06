
import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './user.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit, OnDestroy  {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
 
  @ViewChild(ChildComponent) child;  
  constructor(private userService: UserService) {
  }


  productInParent=[]; 
  ngAfterViewInit() { 
    this.productInParent = this.child.productInChild;  
  } 

  userActivated = false;
  private activatedSub: Subscription;

  
  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
