import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit,OnDestroy{

  userIsAuthenticated:Boolean = false;
  private authListenerSubs: Subscription = new Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit(){
    
    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authListenerSubs = this.authService.
    getAuthStatusListener().
    subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated;
      console.log("in temp userIsAuth is: "+this.userIsAuthenticated);
    });
  }

  ngOnDestroy(){
     this.authListenerSubs?.unsubscribe();
  }

}
