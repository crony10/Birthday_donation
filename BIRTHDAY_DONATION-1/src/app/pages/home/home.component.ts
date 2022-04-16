import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

 
  ngo = false;
  ngOnInit(): void {
  }

  donorsWorksClicked() {
    this.ngo = false;
  }

  ngoWorksClicked() {
    this.ngo = true;
  }

}
