import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registerForm!: FormGroup;
  submitted = false;
  showPassword = false;

  errorMessage = "";

  // Gender options
  genderOptions = ['MALE', 'FEMALE', 'OTHERS'];

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private commonService: CommonService, private router: Router
  ) { }

  ngOnInit(): void {
    this.commonService.loginStatus.next(false);
    
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(25), 
        Validators.pattern('.*[A-Z].*'), // At least 1 capital letter
        Validators.pattern('.*[0-9].*'), // At least 1 number
        Validators.pattern('.*[!@#$%^&*(),.?":{}|<>].*') // At least 1 symbol
      ]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]] // Validates 10 digit phone number
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Custom validator for password matching
  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    if (form.get('password')?.value !== form.get('confirmPassword')?.value) {
      return { 'mismatch': true };
    }
    return null;
  }

  // Toggle password visibility
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Submit form
  onSubmit() {
    this.submitted = true;

    // If form is invalid, return
    if (this.registerForm.invalid) {
      return;
    }

    // Handle form submission
    console.log(this.registerForm.value);
    this.userService.userRegistration(this.registerForm.value).subscribe(
      res=>{
        this.router.navigate(['/login'])
      },err=>{
        this.errorMessage = err.error.message;
      }
    )
  }

  // Getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
}
