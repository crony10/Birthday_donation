import { Component, OnInit } from '@angular/core';
import { donationService } from '../../donation/donation.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  donationObject = {
    id: 0,
    amount: 0
  }

  constructor(public donationService:donationService) { }

  ngOnInit(): void {

    
  }

  showDonations(){
    this.donationObject = this.donationService.getDonationObject();
    console.log("oik" + this.donationObject);
  }
  showMyProfile(){
    console.log("showing donations")
  }
  showDonationPoints(){
    console.log("showing donations")
  }

}
