import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  message = '';

  donationObject = {
    id:0,
    amount: 0
  }
  cardProperties = [{
    image:'../../../assets/image/boy.webp',
    title:'Food donation',
    text:'donate here'
  }]
  constructor(private http: HttpClient) { }

  sendDonation(){
    // for posting
    this.donationObject.id++;
    console.log("the amount donated on the client is: "+this.donationObject.amount + "also the id of the donation is : " + this.donationObject.id);
    this.http.post<{message:string,amount:number}>('http://localhost:3000/api/donation',this.donationObject)
    .subscribe((responseData)=>{
      console.log("this is client saying we have sent the data to server and got the message from there which is: "+ responseData.message); 
    });
  }

  fetchDonation(){
    // for getting
    this.http.
    get<{message:string,donations:any}>('http://localhost:3000/api/donation')
    .pipe(map((donationData)=>{
      return donationData.donations.map((donation: { _id: any; amount: any; })=>{
        return {
          id: donation._id,
          amount: donation.amount
        }
      });
    }))
    .subscribe((transfromedDonations)=>{
      console.table(transfromedDonations);
      this.donationObject = transfromedDonations;
      // console.log("aayi gyu: "+ donationData.donations  + " and the message is: " + donationData.message); 
      console.log(this.donationObject);
    })
  }

  ngOnInit(): void {
  }
}
