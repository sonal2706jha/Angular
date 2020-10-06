import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  productInChild=[];  
    constructor() {  
      this.getProducts(); 
    }
      public getProducts() { 
      this.productInChild = [
        {
          SrNo: "101",
          Brand: "Oppo", 
          Price: 7810.23
        },  
        {  
          SrNo: "102",
          Brand: "One Plus", 
          Price: 9710.23
        },  
        {  
            SrNo: "103",
            Brand: "Nokia", 
            Price: 4510.23
        },  
        {  
            SrNo: "104",
            Brand: "Samsung", 
            Price: 8810.23
        } 
      ]; 
    }  

}
