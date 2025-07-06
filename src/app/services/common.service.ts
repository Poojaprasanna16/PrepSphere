import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loginStatus = new BehaviorSubject(localStorage.getItem('loginStatus') == "true" ? true : false);
  loggedInEmail = '';

  constructor() { }

  getLoggedInEmail(){
    if(this.loggedInEmail != ''){
      return this.loggedInEmail;
    }else{
      return localStorage.getItem('email');
    }
  }

  setLoggedInEmail(email: any){
    this.loggedInEmail = email;
    localStorage.setItem("email", email);
  }

  isAuthenticated(){
    return this.loginStatus.getValue();
  }

}
