import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-editdonationadmin',
  templateUrl: './editdonationadmin.component.html',
  styleUrls: ['./editdonationadmin.component.css']
})
export class EditdonationadminComponent implements OnInit {
  

  enteredTitle:string ='';
  title='dffdfd';
  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
   
  }

  onAddCampaign(){
    this.title = this.enteredTitle;
  }

}
