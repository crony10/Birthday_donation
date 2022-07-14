import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { donationService } from './donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  message = '';

  donationObject = {
    id: 0,
    amount: 0
  }
  cardProperties = [{
    card1: {
      image: '../../../assets/image/boy.webp',
      title: 'Food donation',
      text: 'donate here'
    },
    card2:{
      image:'../../../assets/image/urgent.jpg',
    title:'Food donation',
    text:'donate here'
    },
    card3:{
      image:'../../../assets/image/urgent3.jfif',
    title:'Food donation',
    text:'donate here'
    },
    card4:{
      image:'../../../assets/image/urgent4.jpg',
    title:'Food donation',
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
  constructor(private http: HttpClient,public donationService:donationService) { }

  sendDonation(){
    // for sending the donation
    console.log("sending the amount : ",this.donationObject.amount);
    this.donationService.sendDonation(this.donationObject.amount);
  }

  fetchDonation() {
    
    // for getting
    this.donationService.fetchDonation();
  }

  ngOnInit(): void {
  }
}
