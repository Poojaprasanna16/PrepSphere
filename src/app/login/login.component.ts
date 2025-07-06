import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  errorMessage = "";

  constructor(private fb: FormBuilder, private userService: UserService,
    private commonService: CommonService, private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.commonService.loginStatus.next(false);
  }

  // Create the reactive form with validators
  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email field (required, email format)
      password: ['', [Validators.required]]  // Password field (required)
    });
  }

  // Get form control references for easier access
  get f() {
    return this.loginForm.controls;
  }

  // Submit form handler
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.userService.userLogin(this.loginForm.value).subscribe(
        res=>{
          localStorage.setItem("loginStatus", JSON.stringify(true));
          this.commonService.loginStatus.next(true);
          this.commonService.setLoggedInEmail(this.loginForm.value.email);
          this.router.navigate(['/home'])
        }, err=>{
          this.errorMessage = JSON.parse(err.error).message;
        }
      )
    } else {
      console.log('Form is invalid!');
    }
  }
}
