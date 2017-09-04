import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('currentUser')) { // If already logged in return true
            return true;
        }

        this.router.navigate(['/login']); // Else redirect to the login page and return false
        return false;
    }   
}