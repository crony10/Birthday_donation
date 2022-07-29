import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-editdonationadmin',
  templateUrl: './editdonationadmin.component.html',
  styleUrls: ['./editdonationadmin.component.css']
})
export class EditdonationadminComponent implements OnInit {
  
  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  getAllTask(){
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list");
    })
  }

  addTask(){
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res =>{
      this.ngOnInit();
      this.addTaskValue = '';
    }, err => {
      alert(err);
    })
  }

  editTask(){
    this.crudService.editTask(this.taskObj).subscribe( res => {
      this.ngOnInit();
    }, err=> {
      alert("failed to delete task");
    })
  }

  deleteTask(etask : Task){
    this.crudService.deleteTask(etask).subscribe( res => {
      this.ngOnInit();
    }, err =>{
      alert("faild to delete task");
    });
  }

}
