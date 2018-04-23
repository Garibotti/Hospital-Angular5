import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HHttpInterceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
		//req.headers.set("Content-Type","application/json");
		let token :string;
		if(localStorage.getItem('currentUser')){
			token = JSON.parse(localStorage.getItem('currentUser')).token;
		}
		
		const authReq = req.clone({ 
			headers: req.headers.set("Authorization", "Bearer " + token)});

		console.log("Sending request with new header now ...");
		//send the newly created request
		return next.handle(authReq)
				.catch((error, caught) => {
					//intercept the response error and displace it to the console
					console.log("Error Occurred");
					console.log(error);
					//return the error to the method that called it
					return Observable.throw(error);
				}) as any;
	}
}
