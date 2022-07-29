import { Component, OnDestroy, OnInit } from '@angular/core';
import { donationService } from './donation.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit,OnDestroy {
  userIsAuthenticated:Boolean = false;
  
  private authListenerSubs: Subscription = new Subscription;
  constructor(public authService:AuthService, public donationService:donationService,private router:Router) { }

  ngOnInit(){

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authListenerSubs = this.authService.
    getAuthStatusListener().
    subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated;
      console.log("in donation component userIsAuth is: "+this.userIsAuthenticated);
    });
    // console.log(this.userIsAuthenticated);
  }

  ngOnDestroy(){
    this.authListenerSubs?.unsubscribe();
  }

  message = '';

  donationObject = {
    id: 0,
    amount: 0
  }
  cardProperties = [{
    card1: {
      image: '../../../assets/image/boy.webp',
      title: 'You Can Help Hundreds Of Underprivileged Children Get An Education',
      text: 'donate here'
    },
    card2:{
      image:'../../../assets/image/urgent.jpg',
    title:'Donate Education Kit & Help These Children In Need',
    text:'donate here'
    },
    card3:{
      image:'../../../assets/image/urgent3.jfif',
    title:'Help Vridh Care Provide Hygiene Kits For Senior Citizens In Old Age Homes',
    text:'donate here'
    },
    card4:{
      image:'../../../assets/image/urgent4.jpg',
    title:'Support Dinesh In Building A Safe Animal Shelter',
    text:'donate here'
    },

    animal1:{
      image:'../../../assets/image/animal1.jpg',
    title:'Food donation',
    text:'donate here'
    },
    animal2:{
      image:'../../../assets/image/animal2.jfif',
    title:'Food donation',
    text:'donate here'
    },
    animal3:{
      image:'../../../assets/image/animal3.jfif',
    title:'Food donation',
    text:'donate here'
    },
    children1:{
      image:'../../../assets/image/children1.jpg',
    title:'Food donation',
    text:'donate here'
    },
    children2:{
      image:'../../../assets/image/children2.jfif',
    title:'Food donation',
    text:'donate here'
    },
    children3:{
      image:'../../../assets/image/children3.jfif',
    title:'Food donation',
    text:'donate here'
    }
  }]
  

  sendDonation(){
    // for sending the donation
    if(this.donationObject.amount==0){
      alert('Enter some amount please!');
      return;
    }
    console.log("sending the amount : ",this.donationObject.amount);
    this.donationService.sendDonation(this.donationObject.amount);
    alert('Donation successful!!!');
  }

  fetchDonation() {
    
    // for getting
    this.donationService.fetchDonation();
  }

  signupClicked(){
    this.router.navigate(['/signup']);
    return;
  }

}
