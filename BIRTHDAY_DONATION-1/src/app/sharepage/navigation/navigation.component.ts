import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription | undefined;
  constructor(private authService:AuthService) { }

  ngOnInit(){
    this.authListenerSubs = this.authService.
    getAuthStatusListener().
    subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy(){
     this.authListenerSubs?.unsubscribe();
  }

}
