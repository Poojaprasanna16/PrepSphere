import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  showRegButton = false;
  showLoginButton = false;
  currentPath: string = '';
  loginStatus = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commonService: CommonService){

  }

  ngOnInit(): void {
    this.validatePath();
    this.getLoginStatus();
  }

  getLoginStatus(){
    this.commonService.loginStatus.subscribe(
      res=> {
        console.log(res)
        this.loginStatus = res}
    )
  }

  validatePath(){
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
      if(this.currentPath == '/login'){
        this.showRegButton = true;
        this.showLoginButton = false;
        this.loginStatus = false;
      }else if(this.currentPath == '/registration'){
        this.showLoginButton = true;
        this.showRegButton = false;
        this.loginStatus = false;
      }else{
        this.showLoginButton = false;
        this.showRegButton = false;
        this.getLoginStatus();
      }
    });

  }

  onRegistration(){
    this.router.navigate(['/registration']);
  }

  onLogin(){
    this.router.navigate(['login'])
  }

  onProfile(){
    this.router.navigate(['user'])
  }

  onHome(){
    this.router.navigate(['home'])
  }

  onLogOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
