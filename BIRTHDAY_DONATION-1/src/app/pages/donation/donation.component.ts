import { Component, OnDestroy, OnInit } from '@angular/core';
import { donationService } from './donation.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Donation } from './donation.model';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit, OnDestroy {
  userIsAuthenticated: Boolean = false;

  private authListenerSubs: Subscription = new Subscription;
  constructor(public authService: AuthService, public donationService: donationService, private router: Router) { }

  ngOnInit() {

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authListenerSubs = this.authService.
      getAuthStatusListener().
      subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        console.log("in donation component userIsAuth is: " + this.userIsAuthenticated);
      });
    // console.log(this.userIsAuthenticated);
  }

  ngOnDestroy() {
    this.authListenerSubs?.unsubscribe();
  }

  message = '';

  donationObject = {
    id: 0,
    amount: 0,
    title: ''
  }
  cardProperties = [{
    card1: {
      title: 'You Can Help Hundreds Of Underprivileged Children Get An Education'
    },
    card2: {
      title: 'Donate Education Kit & Help These Children In Need'
    },
    card3: {
      title: 'Help Vridh Care Provide Hygiene Kits For Senior Citizens In Old Age Homes'
    },
    card4: {
      title: 'Support Dinesh In Building A Safe Animal Shelter'
    },

    animal1: {
      title: 'Food donation'
    },
    animal2: {
      title: 'Food donation'
    },
    animal3: {
      title: 'Food donation'
    },
    children1: {
      title: 'Food donation'
    },
    children2: {
      title: 'Food donation'
    },
    children3: {
      title: 'Food donation'
    }
  }];


  sendDonation() {
    // for sending the donation
    if (this.donationObject.amount == 0) {
      alert('Enter some amount please!');
      return;
    }
    console.log("sending the amount : ", this.donationObject.amount + "also the title is: " + this.donationObject.title);
    this.donationService.sendDonation(this.donationObject.amount);
    alert('Donation successful!!!');
  }

  fetchDonation() {

    // for getting
    this.donationService.fetchDonation();
  }

  signupClicked() {
    this.router.navigate(['/signup']);
    return;
  }

}
