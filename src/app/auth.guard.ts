import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private commonService: CommonService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Check if user is authenticated
    if (this.commonService.isAuthenticated()) {
      return true;  // If user is authenticated, allow access to route
    } else {
      // If not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false;  // Prevent access to the route
    }
  }
}