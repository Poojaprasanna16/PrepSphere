import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userDetails: any;
  userForm!: FormGroup;
  isEditMode = false;
  email: string = 'bharath@gmail.com'; // Example email
  errorMessage = '';

  // Gender options
  genderOptions = ['MALE', 'FEMALE', 'OTHERS'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getUserDetails(this.commonService.getLoggedInEmail());

    // Initialize the form with empty values
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10 digits phone number
      gender: ['', Validators.required],
    });
  }

  // Fetch user details from the backend
  getUserDetails(email: any): void {
    this.userService.getUserDetails(email).subscribe(
      (data) => {
        this.userDetails = data;
        this.setFormValues(data); // Populate form with user data
      },
      (error) => {
        console.error('Error fetching user details', error);
        this.errorMessage = error.message || 'Error fetching user details';
      }
    );
  }

  // Set values in the form
  setFormValues(data: any): void {
    this.userForm.setValue({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      gender: data.gender
    });
  }

  // Toggle between edit and view mode
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      this.setFormValues(this.userDetails); // Reset form if cancel edit
    }
  }

  // Save updated details
  saveChanges(): void {
    if (this.userForm.invalid) {
      this.errorMessage = 'Please correct the errors before saving.';
      return;
    }

    // Send updated data to backend for saving
    this.userService.updateUser(this.userForm.value).subscribe(
      (response: any) => {
        console.log('User details updated successfully', response);
        this.isEditMode = false; // Switch back to view mode
        this.userDetails = this.userForm.value; // Update local user details
      },
      (error: any) => {
        console.error('Error updating user details', error);
        this.errorMessage = error.message || 'Error updating user details';
      }
    );
  }

  // Getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }

}
