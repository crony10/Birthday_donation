import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls:['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  constructor(private router: Router,public authService:AuthService) { }

  ngOnInit(): void {
  }

  onSignupClicked(form: NgForm){
    // this.router.navigate(['/login'])
    if(form.invalid){
      return;
    }

    this.authService.createUser(form.value.email,form.value.password);
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
