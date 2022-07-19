import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  onUserLoginClicked() {
    this.router.navigate(['/login']);
  }
  onAdminLoginClicked(form:NgForm) {
    if(form.invalid){
      return;
    }

    
    this.authService.loginAdmin(form.value.email,form.value.password);
  }

}
