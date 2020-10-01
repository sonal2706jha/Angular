import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
    h1 {
      color: Red;
    }
    
    h3 {
      color: Blue;
    }
  `]
  
})
export class AppComponent {
  title = 'Angular App';
  name="Sonal";
  message="";
  
  
  
}