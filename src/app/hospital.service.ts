import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as jwt_decode from "jwt-decode";

const API_URL = environment.apiUrl;

/*const httpOptions = {
    headers: new HttpHeaders(
    	{ 'Content-Type': 'application/json',
    	'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtZWRpY28ubWVkaWNvIiwianRpIjoiM2U0ODViYjUtMDRkOC00NTA3LTk5OGYtY2M3MzdhZDI2MzVlIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJlZWY4YTM5Yi1jMGJkLTQ3M2EtYTNlNy0xYWZjNDQ3NjAxYTQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNZWRpY28iLCJleHAiOjE1MjQ0MTYyNDEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCJ9.w1EICGbjIh1DNGS1yVEIKh96c80AKrODqrbFI-_ubUc'}
    	)
};*/

@Injectable()
export class HospitalService {
	public token: any;
	constructor(private http: HttpClient) { 
		// set token if saved in local storage
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.token = currentUser && currentUser.token;
	}

  	// Uses http.get() to load data from a single API endpoint
	getPrescricao() {
	    return this.http.get(API_URL+'/api/prescricao');
	}

	login(email: string, password: string, model:any){
		return this.http.post(API_URL+'/api/conta/login', model)
		.map((data) => {
                // login successful if there's a jwt token in the response
                let token = data;
                if (token) {
                    // set token property
                    this.token = token;
                    let role = this.decodeRole(token);
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token, role:role }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
	}

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }


    private decodeRole(token: any): string{
        let jwt = token
        let decoded = jwt_decode(jwt)
        return decoded.Role;
    }
}
