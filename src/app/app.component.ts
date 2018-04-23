import { Component } from '@angular/core';
import { Router } from '@angular/router';
//service
import {HospitalService} from './hospital.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private router: Router, private hospitalService: HospitalService) { }

  isLoggedIn(){
	if (localStorage.getItem('currentUser')) {
		return true; // logged in so return true
	}else{
		return false;
	}
  }

  logout(){
  	this.hospitalService.logout();
  	this.router.navigate(['/login']);
  }
}