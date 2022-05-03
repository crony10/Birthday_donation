import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donation = 0;
  cardProperties = [{
    image:'../../../assets/image/boy.webp',
    title:'Food donation',
    text:'donate here'
  }]
  constructor() { }

  ngOnInit(): void {
  }

  donateButtonClicked(){
    alert("you have doanted "+this.donation)
  }
}
