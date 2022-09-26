import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-campaigns',
  templateUrl: './add-campaigns.component.html',
  styleUrls: ['./add-campaigns.component.css']
})
export class AddCampaignsComponent implements OnInit {


  campaigns = [
    {title:'first campaign'},
    {title:'second campaign'},
    {title:'second campaign'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddCampaign(){
    }
}
