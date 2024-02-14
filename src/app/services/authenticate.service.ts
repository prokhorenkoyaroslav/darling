import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  headers: HttpHeaders = new HttpHeaders();
  private url: string = "http://localhost:8080/api/v1/photo"
  private isAuthenticated = false
  private authSecretKey = "Authorization"
  private token:string = "";

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey)
  }

  loginUser(username: string, password: string): boolean {
    var token = "Basic " + btoa(username +":"+ password);
    var response = this.http.get('http://localhost:8080/login',
      {headers: this.headers.set("Authorization", token).set('Content-Type', 'text/plain'), responseType: 'text'});
    response.subscribe(e => this.token = e.toString());
    if(token === this.token) {
      console.log(this.token)
      localStorage.setItem(this.authSecretKey, token)
      this.isAuthenticated = true
      this.router.navigate([""]);
      return true
    }
    return false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated = false;
  }
}
