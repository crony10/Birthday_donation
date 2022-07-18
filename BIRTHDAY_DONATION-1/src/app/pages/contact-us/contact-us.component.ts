import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class CONTACTUSComponent implements OnInit,OnDestroy {

  userIsAuthenticated:Boolean = false;
  private authListenerSubs: Subscription = new Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit(){
    this.userIsAuthenticated = this.authService.getIsAuth();

    
    this.authListenerSubs = this.authService.
    getAuthStatusListener().
    subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated;
      console.log("in contact-us userIsAuth is: "+this.userIsAuthenticated);
    });
  }

  ngOnDestroy(){
     this.authListenerSubs?.unsubscribe();
  }

}
