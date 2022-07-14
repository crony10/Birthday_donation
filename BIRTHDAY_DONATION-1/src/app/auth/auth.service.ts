import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import {AuthData} from "./auth-data.model"
import { Subject } from "rxjs";



@Injectable({providedIn:"root"})
export class AuthService{
    private token="";
    private authStatusListener = new Subject<boolean>();

    getToken(){
        return this.token;
    }

    getAuthStatusListener(){
        return this.authStatusListener.asObservable();
    }
    constructor(private http: HttpClient){}

    createUser(email:string,password:string){
        const authData : AuthData = {email:email,password:password};
        this.http.post("http://localhost:3000/api/auth_user/signup",authData)
        .subscribe(response=>{
            console.log(response);
        });
    }

    loginUser(email:string,password:string){
        const authData : AuthData = {email:email,password:password};
        this.http.post<{token:string}>("http://localhost:3000/api/auth_user/login",authData)
        .subscribe(response=>{
            console.log(response);
            const token = response.token;
            this.token = token;
            this.authStatusListener.next(true);
        })
    }  
}