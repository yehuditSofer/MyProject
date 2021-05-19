import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-donation',
  templateUrl: './line-donation.component.html',
  styleUrls: ['./line-donation.component.css']
})
export class LineDonationComponent implements OnInit {
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
