import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  enteredTitle='';
  title='';

  campaigns=[
    {title:"first camp"},
    {title:"second camp"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddCampaign(){
    this.campaigns.push({title:this.enteredTitle});
  }

}
