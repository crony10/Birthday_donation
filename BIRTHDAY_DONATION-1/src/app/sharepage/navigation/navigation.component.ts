import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy {
  userIsAuthenticated:Boolean = false;
  adminIsAuthenticated:Boolean = false;

  private authListenerSubs: Subscription = new Subscription;
  private adminAuthListenerSubs: Subscription = new Subscription;

  constructor(private authService:AuthService) { }

  onLogout(){
    this.authService.logoutUser();
  }

  ngOnInit(){
    console.log("init");
    this.authListenerSubs = this.authService.
    getAuthStatusListener().
    subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated;
      console.log("in navigagtion userIsAuth is: "+this.userIsAuthenticated);
    });

    // this.adminIsAuthenticated = this.authService.getIsAdminAuth();
    // console.log("in navigation component the adminAuth is "+this.adminIsAuthenticated);

    this.adminAuthListenerSubs = this.authService.
    getAdminAuthStatusListener().
    subscribe(isAdminAuth=>{
      this.adminIsAuthenticated = isAdminAuth;
      console.log("in navigagtion adminIsAuthenticated is: "+this.userIsAuthenticated);
    })
  }

  ngOnDestroy(){
     this.authListenerSubs?.unsubscribe();
  }

}
