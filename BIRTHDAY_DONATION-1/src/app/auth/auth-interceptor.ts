import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler){
        
        const authToken = this.authService.getToken();
        const authReq = req.clone({
            headers: req.headers.set('authorization',"Bearer "+ authToken)
        })
        return next.handle(authReq);
    }
}