import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//service
import {HospitalService} from './../hospital.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	model: any = {};
    loading = false;
    error = '';
	constructor(private router: Router,
	    private hospitalService: HospitalService) { }

	ngOnInit() {
		//could be a logout call but logout has not been implemented
	}
	login() {
		this.loading = true;
		this.hospitalService.login(this.model.email, this.model.password, this.model)
		    .subscribe(result => {
		        if (result === true) {
		            // login successful
		            this.router.navigate(['/']);
		        } else {
		            // login failed
		            this.error = 'Username or password is incorrect';
		            this.loading = false;
		        }
	    });
	}	

}
