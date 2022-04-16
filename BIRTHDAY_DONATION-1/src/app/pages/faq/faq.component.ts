import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor() { }

  ngo = false;

  ngOnInit(): void {
  }

  donorsFAQClicked(){
    this.ngo = false;
  }
  ngoFAQClicked(){
    this.ngo = true;
  }

}
