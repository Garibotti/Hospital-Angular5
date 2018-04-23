import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnfermeiraGuard implements CanActivate {
	constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    	if (JSON.parse(localStorage.getItem('currentUser')).role == "Enfermeira") {
            return true;           // logged in so return true
        }else{
        	this.router.navigate(['/medico']);
        	return false;
        }
  }
}
