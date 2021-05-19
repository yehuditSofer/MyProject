import { Component, OnInit } from '@angular/core';
import { DonationService } from './donation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj1 = false;
  text1 = 'יישות 1';
  text2 = '100 ש""ח';

  
  constructor() { }

  ngOnInit(): void {
    
  }
  changObj():void {
    this.obj1 = (this.obj1!)
  }
}
  
