import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';



@Injectable({ providedIn: "root" })
export class donationService {

   
    constructor(private http: HttpClient) { }

    donationObject = {
        id: 0,
        amount: 0
    }

    sendDonation(amount:number) {
        // for posting
        this.donationObject.amount = amount;
        this.donationObject.id++;
        console.log("the amount donated on the client is: " + this.donationObject.amount + "also the id of the donation is : " + this.donationObject.id);
        this.http.post<{ message: string, amount: number }>('http://localhost:3000/api/donation', this.donationObject)
            .subscribe((responseData) => {
                console.log("this is client saying we have sent the data to server and got the message from there which is: " + responseData.message);
            });
    }

    fetchDonation() {
        // for getting
        this.http.
            get<{ message: string, donations: any }>('http://localhost:3000/api/donation')
            .pipe(map((donationData) => {
                return donationData.donations.map((donation: { _id: any; amount: any; }) => {
                    return {
                        id: donation._id,
                        amount: donation.amount
                    }
                });
            }))
            .subscribe((transfromedDonations) => {
                console.table(transfromedDonations);
                this.donationObject = transfromedDonations;
                // console.log("aayi gyu: "+ donationData.donations  + " and the message is: " + donationData.message); 
                console.log("gotcha!!!");
                console.log(this.donationObject);
            })
    }
}