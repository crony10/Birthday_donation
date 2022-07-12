import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import {AuthData} from "./auth-data.model"



@Injectable({providedIn:"root"})
export class AuthService{
    
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
        this.http.post("http://localhost:3000/api/auth_user/login",authData)
        .subscribe(response=>{
            console.log(response);
        })
    }  
}