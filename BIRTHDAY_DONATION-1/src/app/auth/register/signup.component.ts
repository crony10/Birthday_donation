import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClicked(){
    this.router.navigate(['/login'])
  }

  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking',
  ];
  onSubmit(form: any) {
    console.log(form.value);
  }

}
