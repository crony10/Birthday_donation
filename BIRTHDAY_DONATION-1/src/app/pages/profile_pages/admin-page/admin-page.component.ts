import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  enteredTitle='';
  title='';

  profileClicked = 1;


  campaigns=[
    {title:"first camp"},
    {title:"second camp"}
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onAddCampaign(){
    this.campaigns.push({title:this.enteredTitle});
  }

  adminProfileClickd(){
    this.profileClicked = 1;
  }

  addCampaignClicked(){
    this.profileClicked = 0;
  }

}
