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
  private authListenerSubs: Subscription = new Subscription;
  constructor(private authService:AuthService) { }

  onLogout(){
    this.authService.logoutUser();
  }

  ngOnInit(){
    this.authListenerSubs = this.authService.
    getAuthStatusListener().
    subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated;
      console.log("in navigagtion userIsAuth is: "+this.userIsAuthenticated);
    });
  }

  ngOnDestroy(){
     this.authListenerSubs?.unsubscribe();
  }

}
