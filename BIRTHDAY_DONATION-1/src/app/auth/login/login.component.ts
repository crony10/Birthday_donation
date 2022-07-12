import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,public authService : AuthService) { }

  ngOnInit(): void {
  }

  onLoginClicked(form : NgForm){
    if(form.invalid){
      return;
    }
    this.authService.loginUser(form.value.email,form.value.password);
  }

  onSignupClicked(){
    this.router.navigate(['/signup'])
  }

}
