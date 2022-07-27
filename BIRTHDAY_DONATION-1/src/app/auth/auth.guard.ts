import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){};
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isUserAuth = this.authService.getIsAuth();
        const isAdminAuth = this.authService.getIsAdminAuth();

        if(isUserAuth){
            return isUserAuth;
        }
        else if(isAdminAuth){
            return isAdminAuth;
        }
        else{
            this.router.navigate(['/login']);
        }

        return false;
    }

    
}