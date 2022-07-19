import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import { AuthData } from "./auth-data.model"
import { Subject } from "rxjs";
import { Router } from "@angular/router";



@Injectable({ providedIn: "root" })
export class AuthService {
    private isAuthenticated = false;
    private isAdminAuthenticated = false;

    private token!: string | null;
    private authStatusListener = new Subject<boolean>();
    private adminAuthStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router:Router) { }

    getToken() {
        return this.token;
    }

    getIsAuth(){
        return this.isAuthenticated;
    }
    getIsAdminAuth(){
        return this.isAdminAuthenticated;
    }

    

    getAuthStatusListener() {
        console.log("called getAuthStatusListener() in auth service!!");
        // console.log(this.authStatusListener.asObservable());
        // this.authStatusListener.next(true);
        return this.authStatusListener.asObservable();
    }

    getAdminAuthStatusListener() {
        console.log("called getAuthStatusListener() in auth service!!");
        // console.log(this.authStatusListener.asObservable());
        // this.authStatusListener.next(true);
        return this.adminAuthStatusListener.asObservable();
    }
    

    createUser(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http.post("http://localhost:3000/api/auth_user/signup", authData)
            .subscribe(response => {
                console.log(response);
            });
    }

    loginUser(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http.post<{ token: string }>("http://localhost:3000/api/auth_user/login", authData)
            .subscribe(response => {
                console.log(response);
                const token = response.token;
                this.token = token;
                if (token) {
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    this.router.navigate(['/user']);
                }
            })
    }

    loginAdmin(email:string,password:string){
        // const authData:AuthData = {email:email,password:password};

        if(email=="cronypaul@gmail.com" && password=="iamadmin"){
            this.isAdminAuthenticated = true;
            this.adminAuthStatusListener.next(true);
            console.log("admin detected!!!");
            this.router.navigate(['/admin']);
        }
    }

    logoutUser(){
        this.token = null; 
        this.isAuthenticated = false;
        this.isAdminAuthenticated = false;

        this.authStatusListener.next(false);
        this.adminAuthStatusListener.next(false);
        this.router.navigate(['/']);
    }
}