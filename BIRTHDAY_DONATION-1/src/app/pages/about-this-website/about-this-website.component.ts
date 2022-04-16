import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
@Component({
  selector: 'app-about-this-website',
  templateUrl: './about-this-website.component.html',
  styleUrls: ['./about-this-website.component.css']
})
export class AboutThisWebsiteComponent implements OnInit {

  donors = false;
  constructor() { }

  ngOnInit(): void {
  }

  donorsClicked(){
    this.donors = true;
  }

  campaignersClicked(){
    this.donors = false;
  }

  // getLinkState(){
  //   return this.donors?'nav-link active' : 'nav-link';
  // }
}
